import React from "react";
import TeamResult from "../layout/TeamResult";
import rogueLogo from "../assets/rogue-rebrand-removebg-2.png";
import MADLogo from "../assets/Mad-lions-madrid-removebg-2.png";
import MatchSelected from "../components/MatchSelected";
// import { Navbar } from "../layout/Navbar";

const tempInfo = [
  {
    teamName: "Rogue",
    image: rogueLogo,
    percentage: 73,
    betpoints: 1043,
    selected: true,
    wonMatch: true,
    wonRound: 1,
  },
  {
    teamName: "MAD Lions",
    image: MADLogo,
    percentage: 27,
    betpoints: 3312,
    seleted: false,
    wonMatch: false,
    wonRound: 0,
  },
];

const data = {
  gameImg: "https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg",
  game: "League of Legends",
  league: "pupuLeague",
  date: "24/06/22",
  time: "20:00",
  teamA: "Rogue",
  teamB: "MAD Lions",
};

export const ResultPage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="resultPage">
        <MatchSelected data={data} />
        <div className="infos-game">
          <section className="team-result">
            <h3>Status du match :</h3>
            <p>Terminé</p>
            <p className="score">
              <span className={tempInfo[0].wonMatch == true ? "match-win" : "match-lost"}>{tempInfo[0].wonRound}</span>
              <span> - </span>
              <span className={tempInfo[1].wonMatch == true ? "match-win" : "match-lost"}>{tempInfo[1].wonRound}</span>
            </p>
          </section>
          <section className="temp-team-result">
            {tempInfo.map((element, index: number) => (
              <>
                {index == 1 && (
                  <>
                    <section className="team-result2">
                      <h3 className="gameStatus_h">Status du match :</h3>
                      <p className="gameStatus_p">Terminé</p>
                      <p className="score">
                        <span className={tempInfo[0].wonMatch == true ? "match-win" : "match-lost"}>
                          {tempInfo[0].wonRound}
                        </span>
                        <span> - </span>
                        <span className={tempInfo[1].wonMatch == true ? "match-win" : "match-lost"}>
                          {tempInfo[1].wonRound}
                        </span>
                      </p>

                      <section className="gamble-result-2">
                        <p className="gamble-total-pts">
                          Total points pariés : <span>4355</span>
                        </p>
                        <div className="gamble-result-box">
                          <div className="gamble-upper-result">
                            <p>
                              Mise : <span>200</span>
                            </p>
                            <p>
                              Gain : <span>+74</span>
                            </p>
                          </div>
                          <div className="gamble-lower-result">
                            <p>
                              Total : <span>274</span>
                            </p>
                          </div>
                        </div>
                      </section>
                    </section>
                  </>
                )}
                <TeamResult
                  key={index}
                  teamName={element.teamName}
                  pic={element.image}
                  percentage={element.percentage}
                  betpoints={element.betpoints}
                  selected={element.selected}
                  isWon={element.wonMatch}
                />
              </>
            ))}
          </section>
          <section className="gamble-result">
            <p className="gamble-total-pts">
              Total points pariés : <span>4355</span>
            </p>
            <div className="gamble-result-box">
              <div className="gamble-upper-result">
                <p>
                  Mise : <span>200</span>
                </p>
                <p>
                  Gain : <span>+74</span>
                </p>
              </div>
              <div className="gamble-lower-result">
                <p>
                  Total : <span>274</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
