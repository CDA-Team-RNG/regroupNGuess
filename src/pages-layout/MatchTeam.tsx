import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { TeamsType } from '../models/teamsType'
import { teamService } from '../services/teamService';
import { TeamOdds } from './TeamOdds';

export type MatchTeamProps ={
    team: TeamsType;
}

export const MatchTeam = (props: MatchTeamProps) => {

  return (
   <>
   <p className='matchTeamPName'>{props.team.name}</p>
   <img src="{props.team.logo}" alt="" />
   <p><TeamOdds odds={props.team.odds} /></p>
<img className='imgVs' src="../assets/vs.png" alt="" />
   </>
  )
}
