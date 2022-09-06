import React, {useEffect, useState} from "react";

import twitchLogo from "./../assets/twitch-white.png";
import youtubeLogo from "./../assets/youtube-white.png";

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

  // SET STATE FUNCTION_____________________
  const setStateFunc = (objAttr: string, cssClass: string) => {
    setswitchCss((prevCssClassSwitch) => {
      return {
        ...prevCssClassSwitch,
        [objAttr]: cssClass,
      };
    });
  };

  // change css function so inline display
  // on panel display
  const displayAndAnim = () => {
    setStateFunc("display", "");

    setTimeout(() => {
      setStateFunc("opacity", "content-opacity-on");
    }, 10);
  };

  // on panel hide ( transition first then display none)
  const hideAfterAnim = () => {
    setStateFunc("opacity", "content-opacity-off");

    setTimeout(() => {
      setStateFunc("display", "none");
    }, 15);
  };

  //trigger function only when panel button trigger
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
