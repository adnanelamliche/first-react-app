import { Link } from "react-router-dom";

export default function Aside(){
    return(
        <aside className="min-h-screen w-64 bg-slate-900 p-5 text-white">
        <h2 className="mb-5 font-bold">
          Menu
        </h2>

        <ul className="space-y-3">
          <li> <Link to="/acceuil">Accueil </Link></li>
          <li><Link to="/etudiants">Étudiants</Link></li>
          <li>Notes</li>
        </ul>
      </aside>
    )
}