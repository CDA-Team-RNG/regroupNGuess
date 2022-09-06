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
    // no need here of the click for anything else than form submit
    // e.preventDefault();
    // prevent onSubmit to work
    e.stopPropagation();
  };

  const submitTest = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // e.stopPropagation(); prevent onSubmit to work
    // use onSubmit to have css transition opacity to function and do a set free transition between comp
    // submit with "enter" press seem to not have consistant css transition working !??

    props.sendBet(bet);
  };

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
    <form
      style={{display: `${switchCss.display}`}}
      className={`drop-down__form ${switchCss.opacity}`}
      onSubmit={(e) => submitTest(e)}>
      <div>
        <div>
          <label
            className="drop-down-text"
            htmlFor="betValueiD">
            Mise&nbsp;:
          </label>
          <input
            type="text"
            name="betValue"
            id="betValueiD"
            onChange={getBet}
            value={bet}
          />
        </div>
        <p className="drop-down-text drop-down-gaisn">
          Gain : <span>{props.gain}</span>
        </p>
      </div>
      <div>
        <Button
          innerHtml="Parier"
          onClickButton={formClick}
        />
      </div>
    </form>
  );
};
