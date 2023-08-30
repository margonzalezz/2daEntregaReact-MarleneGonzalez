import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return(
    <div>
      {/* <Navbar/> */}
    <Navbar></Navbar>
    {/* <ItemListContainer greeting="Hola mundo! :)"/> */}

    <Routes>
      <Route path="/" element={<ItemListContainer />}></Route>
      <Route path="/category/:id" element={<ItemListContainer />}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
    </div>
  )
}

export default App;
