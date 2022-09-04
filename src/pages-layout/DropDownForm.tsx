import React from "react";

import {Button} from "../components/Button";

// might need to change gain key type later.
// string is passed as temp value
type DropDownForm = {
  gambleClick: React.MouseEventHandler<HTMLButtonElement>;
  gain: string;
};

export const DropDownForm = (props: DropDownForm) => {
  return (
    <form className="drop-down__form">
      <div>
        <div>
          <label className="drop-down-text" htmlFor="betValueiD">
            Mise&nbsp;:
          </label>
          <input type="text" name="betValue" id="betValueiD" />
        </div>
        <p className="drop-down-text">
          Gain : <span>{props.gain}</span>
        </p>
      </div>
      <Button innerHtml="Parier" onClickButton={props.gambleClick} />
    </form>
  );
};
