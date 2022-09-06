import { type } from 'os'
import React from 'react'

export type TeamOddsProps = {
  odds: number
}

export const TeamOdds = (props: TeamOddsProps) => {
  if (props.odds >= 2) {
    return (
      <>
      <div className='teamOdds'>
      <button className='odds2'> {props.odds} </button>
      </div>
      </>
    )
  }
  else {
      return (
        <>
        <div className='teamOdds'>
        <button className='odds'> {props.odds} </button>
        </div>
        </>
      )
  }
}
