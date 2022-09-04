import React from "react";

type PostBet = {
  gain: string;
  bet: string;
};

export const DropDownPostBet = (props: PostBet) => {
  return (
    <section className="drop-down__post-bet">
      <div>
        <p className="drop-down-text">Mise&nbsp;: {props.bet}</p>
        <p className="drop-down-text">
          Gain&nbsp;: <span>{props.gain}</span>
        </p>
      </div>
    </section>
  );
};
