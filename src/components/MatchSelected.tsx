import React from 'react'

function MatchSelected(props : any) {
    return (
        <div className='match-selected-card'>
            <figure>    
                <img src={props.data.gameImg} alt="Game picture" />
            </figure>
            <div>
                <p className='game'>{props.data.game}</p>
                <p className='league'>{props.data.league}</p>
                <p className='date'>{props.data.date} - {props.data.time}</p>
                <p className='versus'>Match : <span>{props.data.teamA}</span>  Vs <span>{props.data.teamB}</span></p>
            </div>
        </div>
    )
}

export default MatchSelected