import React from 'react'
import { Match } from '../../components/Match'

export const MatchList = () => {
  return (
    <>
     <div className="matchList"  >
        <h3 className="titre">Choisir un match</h3>
        <div className="matchListMatch">
         {/* Calling the Match component. */}
          <Match />
          <Match />
          <Match />
          <Match />
          <Match />
          <Match />
          <Match />
          <Match />
          <Match />
        </div>
      </div>
    </>
  )
}
