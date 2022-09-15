import { type } from 'os'
import React from 'react'
import { TeamsType } from '../models/teamsType';

export type TeamOddsProps = {
  odds: number;
}

/* A function that takes a prop called odds and returns a button with the odds.
If the odds are greater than or equal to 2, the button will have a class of odds2, otherwise it will
have a class of odds. */
export const TeamOdds = ( props: TeamOddsProps ) => {
  //Conditional rendering to change the background color of odds button (red if odds >=2 else blue)
  if ( props.odds >= 2 ) {
    return (
      <>
        <div className='teamOdds'>
          <button className='odds2'> {props.odds} </button>
        </div>
      </>
    )
  } else  {
    return (
      <>
        <div className='teamOdds'>
          <button className='odds'> {props.odds} </button>
        </div>
      </>
    )
  }
}
