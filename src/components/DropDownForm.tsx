import {NONAME} from "dns";
import React, {useEffect, useState} from "react";

import {Button} from "./Button";
import {TeamOdds} from "../pages-layout/TeamOdds";

import {updateState} from "./../services/tools";

// -----------------------------------------------------------
// -----------------------------------------------------------
// might need to change gain key type later.
type DropDownForm = {
  sendBet: Function;
  panelDisplay: boolean;
  gain: string;
  odds: number;
};

export const DropDownForm = (props: DropDownForm) => {
  // input.value is a string.
  const [bet, setBet] = useState<string>("");

  const [switchCss, setswitchCss] = useState({
    display: "none",
    opacity: "content-opacity-off",
  });

  // ==========================================================
  // INPUT VALUE

  /*
   /^[0-9]+$/
    ^ : character the string beging with
    $ : character the string end with
  */

  /**
   * Invoked by input onChange, filter (depend of regex test) user input to only update state setter when number are typed .
   * Allow <empty.string> so input field can be cleared.
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const getBet = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // check if input is number only, allow empty string to erase everything
    if (/^[0-9]+$/.test(e.target.value) || e.target.value === "") {
      setBet(() => e.target.value);
    } else {
      console.log("enter a number");
    }
  };

  // ==========================================================
  // FORM SUBMIT

  const formClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // only there for form submit
    // e.preventDefault();  prevent onSubmit to work
    e.stopPropagation();
  };

  /**
   * Function bound to form submit, pass the bet value to the parent ( DropDownButton) via sendBet() props.
   * @param e - React.FormEvent<HTMLFormElement>
   */
  const submitTest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // e.stopPropagation(); prevent onSubmit to work
    // use onSubmit to have css transition opacity to function and do a set free transition between comp
    props.sendBet(bet);
  };

  // ==========================================================
  // ==========================================================
  // CSS CLASS SWITCH

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
        <div className="gain-odds">
          <p className="drop-down-text drop-down-gaisn">
            Gain : <span>{props.gain}</span>
          </p>
          <TeamOdds odds={props.odds} />
        </div>
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
