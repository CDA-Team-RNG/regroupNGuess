import React from "react";

import twitchLogo from "./../assets/twitch-white.png";
import youtubeLogo from "./../assets/youtube-white.png";

type PostBet = {
  gain: string;
  bet: string;
};

export const DropDownPostBet = (props: PostBet) => {
  return (
    <section className="drop-down__post-bet">
      <section>
        <p className="drop-down-text">
          Mise&nbsp;: <span> {props.bet}</span>
        </p>
        <p className="drop-down-text drop-down-gain">
          Gain : <span>{props.gain}</span>
        </p>
      </section>

      <section>
        <p className="drop-down-text"> Voir le match :</p>
        <article>
          <a href="#">
            <figure>
              <img src={twitchLogo} alt="" />
            </figure>
          </a>
          <a href="#">
            <figure>
              <img src={youtubeLogo} alt="" />
            </figure>
          </a>
        </article>
      </section>
    </section>
  );
};
