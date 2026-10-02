
import Studentclick from "./click.jsx";
import { useState } from "react";

export default function Content() {

  const [oetudiant, SetoEtudiant] = useState({
    id: "",
    nom: "",
    note: ""
  });

  const [etudiant, SetEtudiant] = useState([
    { id: 1, nom: "Adnane", note: 17 },
    { id: 2, nom: "Said", note: 7 },
    { id: 3, nom: "Ahmed", note: 0 },
    { id: 4, nom: "amin", note: 14 },
    { id: 5, nom: "yahya", note: 10 },
  ]);

  function ajouter() {

    const existe = etudiant.some(function (item) {
      return item.id == oetudiant.id;
    });

    if (existe) {
      alert("this element existe");
      return;
    }

    if (
      oetudiant.id === "" ||
      oetudiant.nom === "" ||
      oetudiant.note === ""
    ) {
      alert("field empty");
      return;
    }

    SetEtudiant([...etudiant, oetudiant]);

    SetoEtudiant({
      id: "",
      nom: "",
      note: ""
    });
  }

  function modifier() {

    const updateEtudiant = etudiant.map(function (item) {

      if (item.id == oetudiant.id) {
        return oetudiant;
      }

      return item;
    });

    SetEtudiant(updateEtudiant);

    SetoEtudiant({
      id: "",
      nom: "",
      note: ""
    });
  }

  function remplir(data) {

    SetoEtudiant({
      id: data.id,
      nom: data.nom,
      note: data.note
    });
  }

  function suprimer() {

    let confirmation = confirm("voulez vous supprimer ?");

    if (confirmation) {

      const deletetudiant = etudiant.filter(function (item) {
        return item.id != oetudiant.id;
      });

      SetEtudiant(deletetudiant);

      SetoEtudiant({
        id: "",
        nom: "",
        note: ""
      });
    }
  }

  function vider() {

    let conf = confirm("voulez vous videz la liste");

    if (conf) {
      SetEtudiant([]);
    }
  }

  return (
    <main className="flex-1 p-8">

      <h2 className="text-3xl font-bold">
        Liste des étudiants
      </h2>

      <div>

        <input
          className="w-70 m-2 p-3 border rounded-lg"
          value={oetudiant.id}
          onChange={(e) =>
            SetoEtudiant({
              ...oetudiant,
              id: e.target.value
            })
          }
          placeholder="ID"
        />

        <input
          className="w-70 m-2 p-3 border rounded-lg"
          value={oetudiant.nom}
          onChange={(e) =>
            SetoEtudiant({
              ...oetudiant,
              nom: e.target.value
            })
          }
          placeholder="Nom"
        />

        <input
          className="w-70 m-2 p-3 border rounded-lg"
          value={oetudiant.note}
          onChange={(e) =>
            SetoEtudiant({
              ...oetudiant,
              note: e.target.value
            })
          }
          placeholder="Note"
        />

        <button
          className="w-70 bg-blue-600 text-white p-3 rounded-lg"
          onClick={ajouter}
        >
          Ajouter
        </button>

        <button
          className="w-70 bg-blue-600 text-white p-3 rounded-lg m-2"
          onClick={modifier}
        >
          Modifier
        </button>

        <button
          className="w-70 bg-blue-600 text-white p-3 rounded-lg"
          onClick={suprimer}
        >
          delete
        </button>

        <button
          className="w-70 bg-blue-600 text-white p-3 rounded-lg"
          onClick={vider}
        >
          vider
        </button>

      </div>

      <Studentclick />

      <button
        onClick={() => console.log("hello !!!")}
        className="bg-blue-500 text-white p-4 border rounded m-2 hover:bg-gray-500"
      >
        Tester row function
      </button>

      <div className="mt-6 grid grid-cols-3 gap-5">

        {etudiant.map(function (item, i) {

          return (
            <div
              key={item.id}
              onClick={() => remplir(item)}
              className={`rounded-xl p-5 shadow hover:bg-gray-300 ${
                item.note < 10
                  ? "bg-red-400"
                  : "bg-white"
              }`}
            >

              <h3 className="text-lg font-bold">
                {item.nom}
              </h3>

              <p className="mt-2 text-slate-500">
                Note : {item.note} / 20
              </p>

            </div>
          );

        })}

      </div>

    </main>
  );
}