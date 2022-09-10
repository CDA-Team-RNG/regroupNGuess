import React, {useEffect, useState} from "react";

import {updateState} from "./../services/tools";

import twitchLogo from "./../assets/twitch-white.png";
import youtubeLogo from "./../assets/youtube-white.png";

// -----------------------------------------------------------
// -----------------------------------------------------------
type PostBet = {
  gain: string;
  bet: string;
  panelDisplay: boolean;
};

export const DropDownPostBet = (props: PostBet) => {
  // ==========================================================
  // ==========================================================
  // CSS CLASS SWITCH
  const [switchCss, setswitchCss] = useState({
    display: "none",
    opacity: "content-opacity-off",
  });

  // change css function so inline display
  // ( css display: none, class addition dont seem to work there, used inline to be sure to have highest specificity)
  // on panel display
  const displayAndAnim = () => {
    updateState("display", "", setswitchCss);

    setTimeout(() => {
      updateState("opacity", "content-opacity-on", setswitchCss);
    }, 20);
  };

  // on panel hide ( transition first then display none)
  const hideAfterAnim = () => {
    updateState("opacity", "content-opacity-off", setswitchCss);

    setTimeout(() => {
      updateState("display", "none", setswitchCss);
    }, 15);
  };

  /* useEffect used to switch the panel css class ( to show or not the panel) depending of panelDisplay state */
  useEffect(() => {
    props.panelDisplay ? displayAndAnim() : hideAfterAnim();
  }, [props.panelDisplay]);

  // ==================================================================
  // ==================================================================
  return (
    <section
      style={{display: `${switchCss.display}`}}
      className={`drop-down__post-bet ${switchCss.opacity}`}>
      <section>
        <p className="drop-down-text">
          Mise&nbsp;: <span> {props.bet === "" ? 0 : props.bet}</span>
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
              <img
                src={twitchLogo}
                alt="twitch logo"
              />
            </figure>
          </a>
          <a href="#">
            <figure>
              <img
                src={youtubeLogo}
                alt="youtube logo"
              />
            </figure>
          </a>
        </article>
      </section>
    </section>
  );
};
