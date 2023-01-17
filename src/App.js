import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./views/Home";
import CreditCard from "./views/CreditCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Backend from "./components/Backend";
import Frontend from "./components/Frontend";
import Fullstack from "./components/Fullstack";
import Error from "./components/Error";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
          <Route path="/frontend" element={<Frontend/>}></Route>
          <Route path="/backend" element={<Backend />}></Route>
          <Route path="/fullstack" element={<Fullstack />}></Route>
          <Route path="/credit" element={<CreditCard />}></Route>
          <Route path="/subscription" element={<Subscription/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
export default App;
