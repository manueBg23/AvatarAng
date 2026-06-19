import Header from "./components/Header";
import Home from "./pages/Home";
import Reflection from "./pages/Reflection";
import Creators from "./pages/Creators";
import Characters from "./pages/Characters";
import Nations from "./pages/Nations";
import './css/App.css'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <Header />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/nations" element={<Nations />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;