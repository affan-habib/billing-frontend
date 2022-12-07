import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Layout from "./layout/Layout";
import PrivateOutlet from "./components/PrivateOutlet";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="invoice" element={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
