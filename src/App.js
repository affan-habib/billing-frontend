import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login";
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./views/NotFound"));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
