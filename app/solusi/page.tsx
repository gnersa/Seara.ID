import { redirect } from "next/navigation";
export const metadata={title:"Solusi Operasional Seara",description:"Solusi operasional Seara kini dikelompokkan melalui halaman Produk dan Industri.",robots:{index:false,follow:true},alternates:{canonical:"https://seara.id/produk"}};
export default function Page(){redirect("/produk")}
