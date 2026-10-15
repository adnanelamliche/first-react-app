import { Route,Routes } from "react-router-dom"
import Header from "./header.jsx"
import Aside from "./side.jsx"
import Content from "./content.jsx"
import Home from "./Home.jsx"
function App() {
  return (
 <>
    <Routes>
      <Route path="/acceuil" element={<Home />} />
      <Route path="/etudiants" element={<Content/>} />

    </Routes>

 </>
  )
};

export default App