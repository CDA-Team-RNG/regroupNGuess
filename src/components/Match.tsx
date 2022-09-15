import React, { useEffect, useState } from 'react'
import { TeamsType } from '../models/teamsType'
import { MatchTeam } from '../pages-layout/MatchTeam'
import { teamService } from '../services/teamService';
import vs from '../assets/vs.png'

export const Match = () => {
    /* A hook that is used to store the data that is returned from the API. */
    const [teams, setTeams] = useState<TeamsType[]>([])

    /* Calling the findAllTeam function when the component mounts. */
    useEffect(() => {
        findAllTeam()
    }, [])

    /**
     * When the component mounts, call the findAllTeam function, which will call the findAll function in
     * the teamService, which will return a promise, which will set the state of the teams array to the
     * data returned from the promise.
     */
    const findAllTeam = () => {
        teamService.findAll().then(data => setTeams(data))
    }

    return (
        <>
            {/* A button to choose the match to bet on */}
            <button className='match'>
                <div className='teamLeft'>
                    <MatchTeam team={teams[0]} />
                </div>
                <div className='vs'>
                    <img className='imgVs' src={vs} alt="" />
                    <p className='vsText'>
                        18/09 18H
                    </p>
                </div>
                <div className='teamRight'>
                    {/* Calling the MatchTeam component and passing the team[1] prop to it. */}
                    <MatchTeam team={teams[1]} />
                </div>
            </button>
        </>
    )
}
