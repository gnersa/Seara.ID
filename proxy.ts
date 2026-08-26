import { NextRequest, NextResponse } from "next/server";

function withEnvironmentHeaders(response: NextResponse, host: string) {
  if (host.endsWith(".vercel.app") || host === "localhost" || host === "127.0.0.1") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }
  return response;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;
  const isCrmHost = host === "crm.seara.id" || host.startsWith("crm.");

  if (isCrmHost && pathname === "/sitemap.xml") {
    const url = request.nextUrl.clone();
    url.pathname = "/crm-sitemap.xml";
    return withEnvironmentHeaders(NextResponse.rewrite(url), host);
  }

  if (isCrmHost && pathname === "/robots.txt") {
    const url = request.nextUrl.clone();
    url.pathname = "/crm-robots.txt";
    return withEnvironmentHeaders(NextResponse.rewrite(url), host);
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return withEnvironmentHeaders(NextResponse.next(), host);
  }

  if (!isCrmHost) return withEnvironmentHeaders(NextResponse.next(), host);

  if (pathname === "/crm" || pathname.startsWith("/crm/")) {
    const clean = pathname.replace(/^\/crm/, "") || "/";
    return withEnvironmentHeaders(NextResponse.redirect(new URL(clean, request.url)), host);
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/crm" : `/crm${pathname}`;
  return withEnvironmentHeaders(NextResponse.rewrite(url), host);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
