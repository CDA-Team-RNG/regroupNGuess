import React from "react";

import {Button} from "../components/Button";

export const DropDownForm = (props: any) => {
  return (
    <form className="drop-down__form">
      <div>
        <div>
          <label htmlFor="betValueiD">Mise&nbsp;: </label>
          <input type="text" name="betValue" id="betValueiD" />
        </div>
        <p>
          Gain : <span>{props.gain}</span>
        </p>
      </div>
      <Button innerHtml="Parier" onClickButton={props.gambleClick} />
    </form>
  );
};
