import React from "react";
import MatchSelected from "../components/MatchSelected";
import { Navbar } from "../layout/Navbar";
import TeamStats from "../layout/TeamStats";

import {DropDownButtonContainer} from "../components/DropDownBtn/DropDownButtonContainer";

export const GamblePage = () => {

  const data = {
    gameImg: "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg",
    game: "League of Legends",
    league: "pupuLeague",
    date: "24/06/22",
    time: "20:00",
    teamA: "Rogue",
    teamB: "MAD Lions"
  }

  return (
    <>
      <Navbar />
      <MatchSelected data={data}/>
      <DropDownButtonContainer />
      <TeamStats/>
    </>
  );
};
