import { Route, Routes, BrowserRouter } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Listas } from "./components/Listas/Listas";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/productos" element={<Header />}></Route>
        <Route path="/listas" element={<Listas />}></Route>
        <Route path="/login" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
