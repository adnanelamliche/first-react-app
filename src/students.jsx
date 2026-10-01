  // export const etudiant = [
  // { id: 1 ,nom: "Adnane", note: 17 },
  // {  id: 2 , nom: "Said", note: 7 },
  // {  id: 3 , nom: "Ahmed", note: 10 },

  // ]

export default function Student(props) {
   
  return (

    <div className={`rounde-xl  p-5 shadow ${props.note < 10 ? "bg-red-400 rounde-xl  p-5 shadow" : "bg-white rounde-xl bg-white p-5 shadow"}`}>
      <h3 className="text-lg font-bold">
        {props.nom}
      </h3>

    <p
  className="mt-2 text-slate-500"
>
  Note : {props.note} / 20
</p>
     
    </div>
  );
}
"rounde-xl bg-white p-5 shadow"