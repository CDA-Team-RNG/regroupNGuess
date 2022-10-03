import LolLogo from '../assets/LoL_icon.png';
import ValorantLogo from '../assets/Valorant_icon.png';
import LecLogo from '../assets/LEC_icon.png';
import LcsLogo from '../assets/LCS_icon.png';
import LckLogo from '../assets/LCK_icon.png';
import LplLogo from '../assets/LPL_icon.png';
import VctLogo from '../assets/VCT_icon.png';
import { LeagueItems } from './LeagueItem';
import { useState } from 'react';

export const Sidebar = () => {

    const [selectedGame, setSelectedGame] = useState("League of Legends");
    const [selectedLeague, setSelectedLeague] = useState("Europe Ouest");

    const games = [
    {title: 'League of Legends', img: LolLogo}, 
    {title: 'Valorant', img: ValorantLogo}
    ];
    
    const lolLeagues = [
    {region: 'Europe Ouest', title: 'LEC', img: LecLogo},
    {region: 'Amérique Nord', title: 'LCS', img: LcsLogo},
    {region: 'Corée', title: 'LCK', img: LckLogo},
    {region: 'Chine', title: 'LPL', img: LplLogo}
    ];
    
    const valorantLeagues = [
    {region: 'NA', title: 'VCT 2022', img: VctLogo},
    {region: 'EMEA', title: 'VCT 2022', img: VctLogo},
    {region: 'Corée', title: 'VCT 2022', img: VctLogo},
    {region: 'Japon', title: 'VCT 2022', img: VctLogo},
    ];

    const changeGame = (game : string) => {
        if(game === "League of Legends") {
            setSelectedGame("League of Legends");
            setSelectedLeague("Europe Ouest")
        } else {
            setSelectedGame("Valorant");
            setSelectedLeague("NA");
        }
    }

    const changeLeague = (league: string) => {
        setSelectedLeague(league);
    }

    return(
        <>
            <aside className='sidebar'>
                <div>
                    <h2 className='category-title'>Jeux</h2>
                    <ul>
                        {games.map((item: any) => (
                            <li key={item.title} 
                                className={selectedGame === item.title ? 'category-item selected' : 'category-item' } 
                                onClick={() => {changeGame(item.title)}} 
                                >
                                <figure>
                                    <img className='gameLogo' src={item.img} />
                                </figure>
                                <p>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='category-title'>Ligues</h2>
                    <LeagueItems 
                        data={selectedGame === "Valorant" ? valorantLeagues : lolLeagues} 
                        selected={selectedLeague}
                        changeLeague={changeLeague}
                    />
                </div>
            </aside>
        </>
    )
}