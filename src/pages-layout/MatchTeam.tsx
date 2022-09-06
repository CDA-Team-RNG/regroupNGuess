import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { TeamsType } from '../models/teamsType'
import { teamService } from '../services/teamService';
import { TeamOdds } from './TeamOdds';


export type MatchTeamProps = {
  team: TeamsType;
}

export const MatchTeam = (props: MatchTeamProps) => {

  if (props.team.id === 2) {
    return (
      <>
        <div className='matcheteamContainer2'>
          <div className='matchTeamLogoDiv2'>
            <img className='matchTeamLogo' src={props.team.logo} alt="" />
          </div>
          <div className='matchTeamNameOdds2'>
              <p className='matchTeamPName2'>{props.team.name}
              <hr className='matchTeamLine2' />
              </p>
              <p className='matchTeamOddsDiv'>
                <TeamOdds odds={props.team.odds} /></p>
          </div>
        </div>
      </>
    )
  } else {



    return (
      <>
        <div className='matcheteamContainer'>
          <div className='matchTeamLogoDiv'>
            <img className='matchTeamLogo' src={props.team.logo} alt="" />
          </div>
          <div className='matchTeamNameOdds'>
              <p className='matchTeamPName'>{props.team.name}
              <hr className='matchTeamLine' />
              </p>
              <p className='matchTeamOddsDiv'>
                <TeamOdds odds={props.team.odds} /></p>
          </div>
        </div>
      </>
    )
  }
}
