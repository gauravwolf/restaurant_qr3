import { Routes, Route } from "react-router-dom";
import Login from "./form/Login";
import Register from "./form/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default App;
