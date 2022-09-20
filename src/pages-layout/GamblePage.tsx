import React, { useState } from "react";
import MatchSelected from "../components/MatchSelected";
import { Navbar } from "./Navbar";
import TeamStats from "./TeamStats";
import vs from '../assets/vs.png'

import { DropDownButtonContainer } from "../components/DropDownButtonContainer";
import { lastMatchsData } from "../models/Stats";

export const GamblePage = () => {
  const [stats, setStats] = useState(lastMatchsData)

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
      <div className="gamblePage">
        <Navbar />
        <div className="matchSelectedComponent">
        <MatchSelected data={data} />
        </div>
        <div className="gameStatus">
          <p>Statut du match :</p>
          <p>Début dans <span className="timeColor">40</span> min</p>
        </div>
        <div className="matchSelectedDropDown">
        <div className="matchSelected">
          <figure className='logo-team-red-gamble'>
            <img className="logo-team-red-gamble-logoFNC" src={`../assets/${stats[0][1].team?.acronym}.png`} alt="logoRed" />
          </figure>
          <div className='vsGamble'>
            <img className='imgVsGamble' src={vs} alt="" />
          </div>
          <figure className='logo-team-red-gamble'>
            <img className="logo-team-red-gamble-logo" src={`../assets/${stats[0][2].team?.acronym}.png`} alt="logoRed" />
          </figure>
        </div>
        <div className="dropDownComponent">
          <DropDownButtonContainer />
        </div>
        </div>
        <div className="teamStatsComponent">
          <div className="teamStatsComponent1">
            <p className="stats">Stats :</p>
          <TeamStats stats={stats} />
          </div>
          <div className="teamStatsComponent2">
          <p className="stats">Stats :</p>
          <TeamStats stats={stats} />
          </div>
        </div>
      </div>
    </>
  );
};
