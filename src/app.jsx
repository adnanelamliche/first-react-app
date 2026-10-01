import Header from "./header.jsx"
import Aside from "./side.jsx"
import Content from "./content.jsx"
function App() {
  return (
 <>
    <Header/>
    
    <div className="flex">
      <Aside />
    <Content/>
    </div>


 </>
  )
};

export default App