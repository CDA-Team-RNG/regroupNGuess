import React, { useEffect, useState } from 'react'
import { TeamsType } from '../models/teamsType'
import { MatchTeam } from '../pages-layout/MatchTeam'
import { teamService } from '../services/teamService';
import vs from '../assets/vs.png'

export const Match = () => {
    const [teams, setTeams] = useState<TeamsType[]>([])

    useEffect(() => {
        findAllTeam()
    }, [])

    const findAllTeam = () => {
        teamService.findAll().then(data => setTeams(data))
    }

    return (
        <>
            <div className='match'>
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
                    <MatchTeam team={teams[1]} />
                </div>
            </div>
        </>
    )
}
