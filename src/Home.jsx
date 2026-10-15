import Header from "./header";
import Aside from "./side";

export default function Home(){
    return(
        <>
        <Header />
        <div className="flex">
        <Aside />
       <h2>Welcome to Gestion des Etudiant</h2> 
        </div>
        </>
    )

}