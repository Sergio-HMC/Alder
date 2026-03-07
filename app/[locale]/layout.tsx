
import Link from "next/link";
import "../globals.css";

export default async function Layout({children, params}:{children:React.ReactNode, params:Promise<{locale:string}>}) {
 const {locale} = await params;
 return (
  <html>
   <body>
    <header className="nav">
      <div>Alder Metrics</div>
      <nav>
        <Link href={`/${locale}`}>Home</Link>
        <Link href={`/${locale}/services`}>Services</Link>
        <Link href={`/${locale}/solutions`}>Solutions</Link>
        <Link href={`/${locale}/contact`}>Contact</Link>
      </nav>
      <div>
        <Link href="/es">ES</Link> | <Link href="/en">EN</Link> | <Link href="/fr">FR</Link>
      </div>
    </header>
    {children}
   </body>
  </html>
 )
}
