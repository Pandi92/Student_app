// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./Components/view";
import Create from "./Components/create";
import Edit from "./Components/Edit";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:viewid" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
