import React, { useEffect, useState } from 'react'
import { TeamsType } from '../models/teamsType'
import { MatchTeam } from '../pages-layout/MatchTeam'
import { teamService } from '../services/teamService'

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
        {teams.map((team:TeamsType, index: number) => {return <MatchTeam key={index} team={team} />})}
        </div>
        </>
    )
}
