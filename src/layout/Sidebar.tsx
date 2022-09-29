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
    {title: 'Europe Ouest', abr: 'LEC', img: LecLogo},
    {title: 'Amérique Nord', abr: 'LCS', img: LcsLogo},
    {title: 'Corée', abr: 'LCK', img: LckLogo},
    {title: 'Chine', abr: 'LPL', img: LplLogo}
    ];
    
    const valorantLeagues = [
    {title: 'VCT 2022 - NA', img: VctLogo},
    {title: 'VCT 2022 - EMEA', img: VctLogo},
    {title: 'VCT 2022 - Corée', img: VctLogo},
    {title: 'VCT 2022 - Japon', img: VctLogo},
    ];

    const changeGame = (game : string) => {
        if(game === "League of Legends") {
            setSelectedGame("League of Legends");
        } else {
            setSelectedGame("Valorant");
        }
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
                    <ul>
                        {lolLeagues.map((item: any) => (
                            <LeagueItems data={item} selected={selectedLeague}/>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}