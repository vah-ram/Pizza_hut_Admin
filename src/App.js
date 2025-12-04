import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
