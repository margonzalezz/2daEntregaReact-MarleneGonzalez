import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return(
    <div>
    <Navbar></Navbar>

    <Routes>
      <Route path="/" element={<ItemListContainer />}></Route>
      <Route path="/category/:id" element={<ItemListContainer />}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
    </div>
  )
}

export default App;
