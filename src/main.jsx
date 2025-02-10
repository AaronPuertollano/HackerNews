import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Top from "./Top";
import New from "./New";
import Perfil from "./Perfil";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/new" element={<New />} />
      <Route path="/top" element={<Top />} />
      <Route path="/user/:username" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
);
