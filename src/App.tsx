import React from "react";
import { HomePage } from "./pages-layout/HomePage";
import { Match } from "./components/Match";
import { GamblePage } from "./pages-layout/GamblePage";
import { MatchTeam } from "./pages-layout/MatchTeam";
import { TeamOdds } from "./pages-layout/TeamOdds";

function App() {
  return (
    <>

      <HomePage />

      <GamblePage />

    </>
  );
}

export default App;