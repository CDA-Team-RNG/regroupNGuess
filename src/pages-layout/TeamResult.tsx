import React from "react";
import {TeamOdds} from "./TeamOdds";

import winCrown from "../assets/win-crown.svg";

type TeamResult = {
  teamName: string;
  pic: any;
  percentage: number;
  betpoints: number;
  selected: boolean;
  isWon: boolean;
};

export const TeamResult = (props: TeamResult) => {
  return (
    <section
      className={`team-result__container
      ${props.selected ? "team-result__container-border-picked" : "team-result__container-border-notpicked"}`}>
      <figure>
        <img
          className="general_img"
          src={props.pic}
          alt=""></img>
      </figure>

      <h2 className="team-result-big-txt">{props.teamName}</h2>
      <p className={`team-result-big-txt ${props.percentage > 50 ? "percentage-sup-50" : "percentage-low-50"}`}>
        {props.percentage}%
      </p>

      <div className="team-result__percentage-bar-container">
        <div
          style={{width: `${props.percentage}%`}}
          className={`${props.percentage > 50 ? "percentage-bar-sup-50" : "percentage-bar-low-50"}`}></div>
      </div>

      <TeamOdds odds={1.37} />

      <p className="team-result-medium-txt">Total de ponts pariés :</p>
      <p>{props.betpoints}</p>

      {props.isWon && (
        <figure className="win-crown">
          <img src={winCrown} />
        </figure>
      )}
    </section>
  );
};

export default TeamResult;
