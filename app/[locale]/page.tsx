
export default async function Page({params}:{params:Promise<{locale:string}>}) {
 const {locale}=await params;
 return (
  <main style={{padding:40}}>
   <h1>Alder Metrics</h1>
   <p>{locale==="es"?"Transformamos datos en decisiones claras":
       locale==="fr"?"Transformer les données en décisions claires":
       "Turning data into clear decisions"}</p>
  </main>
 )
}
