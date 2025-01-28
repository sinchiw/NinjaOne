import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DeviceList from "./pages/DeviceList.tsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DeviceList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
