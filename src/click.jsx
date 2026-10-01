import { useState } from "react"

 export default function Studentclick() {
    const [nom , setNom] = useState("")
    function greet(name){
        setNom(name)
    }
 
  return(
    <>
    <button onClick={()=>greet("khalid")} className="bg-blue-500 text-white p-4 border rounded m-2 hover:bg-gray-500">Tester </button>
    <p>Hello : {nom}</p>
    </>
  )
 }