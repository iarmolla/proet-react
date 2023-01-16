import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Home from './views/Home'
import CreditCard from "./views/CreditCard";

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/credit" element={<CreditCard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
