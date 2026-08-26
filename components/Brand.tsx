import Link from "next/link";

export function Brand({ crm = false }: { crm?: boolean }) {
  return (
    <Link href={crm ? "/crm" : "/"} className="brand" aria-label={crm ? "Seara CRM" : "Seara"}>
      <span className="brandMark" aria-hidden="true" />
      <span>{crm ? "Seara CRM" : "Seara"}</span>
    </Link>
  );
}
