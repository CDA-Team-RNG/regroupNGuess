import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Sidebar } from "./layout/Sidebar";
import {GamblePage} from "./pages/GamblePage";
import {HomePage} from "./pages/HomePage";
import {ResultPage} from "./pages/ResultPage";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <section className="home-main-box">
            <Sidebar/>
            <Routes>
              <Route path="/" element = {<HomePage />}  />       
              <Route path="/gamble" element = {<GamblePage />} />         
              <Route path="/result" element={<ResultPage />}/>      
            </Routes>
          </section>
      </Router>
    </>
  );
}

export default App;
