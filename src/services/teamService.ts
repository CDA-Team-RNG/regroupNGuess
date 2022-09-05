import { TeamsType } from '../models/teamsType'

const URL : string = 'http://localhost:3000/teams'

export class TeamService {
    findAll = (): Promise<TeamsType[]> => {
        return fetch(URL).then((res) => res.json())
    }
}

export const teamService = Object.freeze(new TeamService)
