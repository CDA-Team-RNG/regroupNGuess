import React from 'react'

function TeamEncounter(props : any) {

  return (
    <>
        <div className='team-encounter-card'>
            <p className='encounter-date'>{props.data[0].date}</p>
            <div>
                <figure className='logo-team-red'>
                    <img src={`../assets/${props.data[1].team.acronym}.png`} alt="logoRed"/>
                </figure>
                <p className='score'>{props.data[1].winner} : {props.data[2].winner}</p>
                <figure className='logo-team-blue'>
                    <img src={`../assets/${props.data[2].team.acronym}.png`} alt="logoBlue"/>
                </figure>
            </div>
        </div>
    </>
  )
}

export default TeamEncounter