import {NONAME} from "dns";
import React, {useEffect, useState} from "react";

import {Button} from "./Button";

// might need to change gain key type later.
type DropDownForm = {
  sendBet: Function;
  panelDisplay: boolean;
  gain: string;
};

export const DropDownForm = (props: DropDownForm) => {
  // input.value is a string.
  const [bet, setBet] = useState<string>("");

  // ==========================================================
  // INPUT VALUE
  const regex = /^[0-9]+$/;
  const getBet = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // check if input is number only, allow empty string to erase everything
    if (regex.test(e.target.value) || e.target.value === "") {
      setBet(() => e.target.value);
    } else {
      console.log("enter a number");
    }
  };

  // ==========================================================
  // FORM SUBMIT
  const formClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // could be removed later, for now use it to get the button press.
    // props.gambleClick(e);

    // form onSubmit do not work ??
    props.sendBet(bet);
  };

  // ==========================================================
  // TEST CSS CLASS SWITCH

  const [testCss, setTestCss] = useState({
    display: "none",
    opacity: "content-opacity-off",
  });

  // SET STATE FUNCTION_____________________
  const setStateFunc = (objAttr: any, cssClass: string) => {
    setTestCss((prevCssClassSwitch) => {
      return {
        ...prevCssClassSwitch,
        [objAttr]: cssClass,
      };
    });
  };

  const displayAndAnim = () => {
    setStateFunc("display", "");

    setTimeout(() => {
      setStateFunc("opacity", "content-opacity-on");
    }, 10);
  };

  const hideAfterAnim = () => {
    setStateFunc("opacity", "content-opacity-off");

    setTimeout(() => {
      setStateFunc("display", "none");
    }, 15);
  };

  useEffect(() => {
    props.panelDisplay ? displayAndAnim() : hideAfterAnim();
  }, [props.panelDisplay]);

  //

  // ==================================================================
  // ==================================================================
  return (
    <form style={{display: `${testCss.display}`}} className={`drop-down__form ${testCss.opacity}`}>
      <div>
        <div>
          <label className="drop-down-text" htmlFor="betValueiD">
            Mise&nbsp;:
          </label>
          <input type="text" name="betValue" id="betValueiD" onChange={getBet} value={bet} />
        </div>
        <p className="drop-down-text drop-down-gain">
          Gain : <span>{props.gain}</span>
        </p>
      </div>
      <div>
        <Button innerHtml="Parier" onClickButton={formClick} />
      </div>
    </form>
  );
};
