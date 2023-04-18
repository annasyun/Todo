import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllTodo from "./pages/AllTodo";
import CompletedTodo from "./pages/CompletedTodo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllTodo />} />
      <Route path="/completion" element={<CompletedTodo />} />
    </Routes>
  );
}

export default App;
