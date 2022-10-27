import React, {useState} from "react";
import MatchSelected from "../components/MatchSelected";

import TeamStats from "../layout/TeamStats";
import vs from "../assets/vs.png";

import {DropDownButtonContainer} from "../components/DropDownBtn/DropDownButtonContainer";
import {lastMatchsData} from "../models/Stats";

export const GamblePage = () => {
  const [stats, setStats] = useState(lastMatchsData);

  const data = {
    gameImg: "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg",
    game: "League of Legends",
    league: "pupuLeague",
    date: "24/06/22",
    time: "20:00",
    teamA: "Rogue",
    teamB: "MAD Lions",
  };

  return (
    <>
      <section className="gamblePage">
        {/* --------------------------------------------------- */}

        <MatchSelected data={data} />

        {/* --------------------------------------------------- */}
        <section className="matchSelected-container">
          {/* --------------------------------------------------- */}
          <article className="gameStatus">
            <p>Statut du match :</p>
            <p>
              Début dans <span className="timeColor">40</span> min
            </p>
          </article>

          <article className="matchSelected">
            <figure className="logo-team-red-gamble">
              <img
                className="logo-team-red-gamble-logoFNC"
                src={`../assets/${stats[0][1].team?.acronym}.png`}
                alt="logoRed"
              />
            </figure>

            <figure className="VsGamble-figure">
              <img
                className="imgVsGamble"
                src={vs}
                alt=""
              />
            </figure>

            <figure className="logo-team-red-gamble">
              <img
                className="logo-team-red-gamble-logo"
                src={`../assets/${stats[0][2].team?.acronym}.png`}
                alt="logoRed"
              />
            </figure>
          </article>
        </section>

        <DropDownButtonContainer />

        {/* --------------------------------------------------- */}
        <section className="teamStatsComponent">
          <article className="teamStatsComponent1">
            <p className="stats">Stats :</p>
            <TeamStats stats={stats} />
          </article>

          <article className="teamStatsComponent2">
            <p className="stats">Stats :</p>
            <TeamStats stats={stats} />
          </article>
        </section>
      </section>
    </>
  );
};
