
import Image from "next/image";
import Link from "next/link";

export function Brand({ crm = false }: { crm?: boolean }) {
  return (
    <Link href={crm ? "/crm" : "/"} className="brand" aria-label={crm ? "Seara CRM" : "Seara"}>
      <Image src="/seara-logo.png" width={42} height={42} alt="Seara" priority className="brandLogo" />
      <span>{crm ? "Seara CRM" : "Seara"}</span>
    </Link>
  );
}
