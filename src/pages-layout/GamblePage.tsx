import React from "react";
import { Match } from "../components/Match";

export const GamblePage = () => {
  return (
    <>
      <div className="matchList"  >
        <h3 className="titre">Choisir un match</h3>
        <div className="matchListMatch">
          <Match />
          <Match />
          <Match />
          <Match />
        </div>
      </div>
    </>
  )
};
