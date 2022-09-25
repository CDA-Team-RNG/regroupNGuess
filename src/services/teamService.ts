import { TeamsType } from '../models/teamsType';

const URL : string = 'http://localhost:3000/teams';
const URLLiqui : string = 'https://liquipedia.net/leagueoflegends/api.php?action=leagueoflegendsdbapi&matchid=228288&pagename=test_page_direct_api_call&format=json'

export class TeamService {
    
    findAll = async (): Promise<TeamsType[]> => {
        const res = await fetch(URL)
        return await res.json()
    }

    findMatch = (): Promise<any> => {
        return fetch(URLLiqui + '&origin=*', {
            method: 'GET',
            headers: new Headers({
                'Api-User-Agent': 'RNG/0.0 (florian.flouquet2@hotmail.com)',
                'Accept-Encoding': 'gzip',
                'Content-type' : 'application/json'
            })
        }).then((res) => {
            return res.json();
        }).catch((err) => {
            console.error(err);
        })
    }
}

export const teamService = Object.freeze(new TeamService)
