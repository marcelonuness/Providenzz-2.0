import Consults from "./consults"

async function getConsults() {
  const res = await fetch("http://localhost:3000/api/consult", {
    cache: "no-store"
  })

  if(!res.ok) {
    throw new Error("deu erro :(")
  }
  return res.json()
}


export default async function ConsultList() {
    const data = await getConsults()
    return(
      <div>
        <Consults data={data} />
      </div>
    )
}