import React, { Suspense } from "react";
import Loader from "./components/Loader";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import Layout from "./layout/Layout";
import "./App.css";
const Register = React.lazy(() => import("./pages/register/Register"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="" element={<Layout/>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
