
import React, { useEffect, useState } from "react";
import { CategoryDropDown } from "../components/CategoryDropDown";
import { Navbar } from "../layout/Navbar";
import { MatchList } from "../layout/MatchList/MatchList";

import LolLogo from '../assets/LoL_icon.png';
import ValorantLogo from '../assets/Valorant_icon.png';
import LecLogo from '../assets/LEC_icon.png';
import LcsLogo from '../assets/LCS_icon.png';
import LckLogo from '../assets/LCK_icon.png';
import LplLogo from '../assets/LPL_icon.png';
import VctLogo from '../assets/VCT_icon.png';

export const HomePage = () => {
  
  const [selectedGame, setSelectedGame] = useState({title: 'League of Legends', img: LolLogo});
  const [selectedLeague, setSelectedLeague] = useState({title: 'LEC (Europe Ouest)', img: LecLogo});


  useEffect(() => {
    if(selectedGame.title === 'League of Legends') {
      setSelectedLeague(lolLeagues[0])
    }
    else {
      setSelectedLeague(valorantLeagues[0])
    }
  }, [selectedGame])


  // provisional place for data
  const games = [
    {title: 'League of Legends', img: LolLogo}, 
    {title: 'Valorant', img: ValorantLogo}
  ];

  const lolLeagues = [
    {title: 'LEC (Europe Ouest)', img: LecLogo},
    {title: 'LCS (Amérique Nord)', img: LcsLogo},
    {title: 'LCK (Corée)', img: LckLogo},
    {title: 'LPL (Chine)', img: LplLogo}
  ];

  const valorantLeagues = [
    {title: 'VCT 2022 - NA', img: VctLogo},
    {title: 'VCT 2022 - EMEA', img: VctLogo},
    {title: 'VCT 2022 - Corée', img: VctLogo},
    {title: 'VCT 2022 - Japon', img: VctLogo},
  ];

  // Methodes

  const changeGame = (object: any) => {
    setSelectedGame(object)
  }

  const changeLeague = (object:any) => {
    setSelectedLeague(object)
  }


  return (
    <>
      <div className="home_container">
        <h2>Jeu sélectionné</h2>
        <CategoryDropDown data={games} selectedCategory={selectedGame} changeCategory={changeGame} />
        <h2>Ligue sélectionnée</h2>
        <CategoryDropDown data={selectedGame.title === 'League of Legends' ? lolLeagues : valorantLeagues} selectedCategory={selectedLeague} changeCategory={changeLeague} />
      </div>
      <MatchList /> 
    </>
  )
};

