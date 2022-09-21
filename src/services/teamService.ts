import { TeamsType } from '../models/teamsType';

const URL : string = 'http://localhost:3000/teams'

export class TeamService {
    
    findAll = async (): Promise<TeamsType[]> => {
        const res = await fetch(URL)
        return await res.json()
    }
}

export const teamService = Object.freeze(new TeamService)
