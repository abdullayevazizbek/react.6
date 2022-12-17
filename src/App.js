import react from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProdactList from "./components/ProdactList.";
import { useState } from "react";

function App() {
    const [open, setOpen] = useState(false)

    return (
        <div className="App">
            <Navbar cartOpen={setOpen} />
            <ProdactList />
            <Cart  open={open} setOpen={setOpen}/>
        </div>
    )
}
export default App