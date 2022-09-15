import React from "react";
import TeamResult from "../layout/TeamResult";

import rogueLogo from "../assets/rogue-rebrand-removebg-2.png";
import MADLogo from "../assets/Mad-lions-madrid-removebg-2.png";

const tempInfo = [
  {
    teamName: "Rogue",
    image: rogueLogo,
    percentage: 73,
    betpoints: 1043,
    selected: true,
    wonMatch: true,
  },
  {
    teamName: "MAD Lions",
    image: MADLogo,
    percentage: 27,
    betpoints: 3312,
    seleted: false,
    wonMatch: false,
  },
];

export const ResultPage = () => {
  return (
    <section className="temp-team-result">
      {tempInfo.map((element, index) => {
        return (
          <TeamResult
            key={index}
            teamName={element.teamName}
            pic={element.image}
            percentage={element.percentage}
            betpoints={element.betpoints}
            selected={element.selected}
            isWon={element.wonMatch}
          />
        );
      })}
    </section>
  );
};
