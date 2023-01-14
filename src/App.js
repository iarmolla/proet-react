import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Home from './views/Home'

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
