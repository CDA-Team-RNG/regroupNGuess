import { type } from 'os'
import React from 'react'

export type TeamOddsProps = {
  odds: number
}

export const TeamOdds = (props: TeamOddsProps) => {
  return (
    <>
    <div className='teamOdds'>
    <button className='odds'> {props.odds} </button>
    </div>
    </>
  )
}
