import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {GamblePage} from "./pages/GamblePage";
import {HomePage} from "./pages/HomePage";
import {ResultPage} from "./pages/ResultPage";

function App() {
  return (
    <>
     <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gaamble">About</Link>
            </li>
            <li>
              <Link to="/result">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/"  component={HomePage} />
        <Route path="/gamble" component={GamblePage} />
        <Route path="/result" component={ResultPage} />
      </main>
    </Router>
      {/* <HomePage />
      <GamblePage />
      <ResultPage /> */}
    </>
  );
}

export default App;
