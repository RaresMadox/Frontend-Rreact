import Navbar from "./components/navbar/Navbar";
import Company from "./components/company/Company";

import Learning from "./components/learning/Learning";
import Markets from "./components/markets/Markets";
import News from "./components/news/News";
import SignIn from "./components/signin/Signin";
import Register from "./components/register/Register";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="frame">
        <BrowserRouter>
          <Navbar fixed="top" />
          <Routes>
            <Route path="/Company" element={<Company />}></Route>
            <Route path="/Learning" element={<Learning />}></Route>
            <Route path="/Markets" element={<Markets />}></Route>
            <Route path="/News" element={<News />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
