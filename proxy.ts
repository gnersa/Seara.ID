import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;
  const isCrmHost = host === "crm.seara.id" || host.startsWith("crm.");

  if (!isCrmHost) return NextResponse.next();

  // Keep Next internals/static files untouched.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // If someone opens crm.seara.id/crm/..., keep public URL clean.
  if (pathname === "/crm" || pathname.startsWith("/crm/")) {
    const clean = pathname.replace(/^\/crm/, "") || "/";
    return NextResponse.redirect(new URL(clean, request.url));
  }

  // crm.seara.id/* is internally served by /crm/*
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/crm" : `/crm${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
