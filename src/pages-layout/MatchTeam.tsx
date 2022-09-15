import {type} from "@testing-library/user-event/dist/type";
import React from "react";
import {TeamsType} from "../models/teamsType";
import {teamService} from "../services/teamService";
import {TeamOdds} from "./TeamOdds";

//define a prop type , call MatchTeamProps
export type MatchTeamProps = {
  team: TeamsType;
};

/**
 * It's a function that takes in a prop called team and returns a div with a logo and a name to display team details.
 * @param {MatchTeamProps} props - MatchTeamProps
 */
export const MatchTeam = (props: MatchTeamProps) => {
  //Conditional rendering to display the team logo on the left or on the right compared to the team id
  if (props.team.id === 2) {
    return (
      <>
        <div className="matcheteamContainer2">
          <figure className="matchTeamLogoDiv">
            <img
              className="matchTeamLogo"
              src={props.team.logo}
              alt=""
            />
          </figure>
          <div className='matchTeamNameOdds2'>
            <div className='matchTeamPName2'>{props.team.name}
              <hr className='matchTeamLine2' />
            </div>
            <div className='matchTeamOddsDiv'>
              {/* Calling the TeamOdds component and passing the odds prop to it. */}
              <TeamOdds odds={props.team.odds} /></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="matcheteamContainer">
          <figure className="matchTeamLogoDiv">
            <img
              className="matchTeamLogo"
              src={props.team.logo}
              alt=""
            />
          </figure>
          <div className='matchTeamNameOdds'>
            <div className='matchTeamPName2'>{props.team.name}
              <hr className='matchTeamLine' />
            </div>
            <div className='matchTeamOddsDiv'>
              {/* Calling the TeamOdds component and passing the odds prop to it. */}
              <TeamOdds odds={props.team.odds} /></div>
          </div>
        </div>
      </>
    );
  }
};
