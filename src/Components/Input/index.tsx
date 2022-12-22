import { useEffect, useState } from "react";
import * as C from "./style";
import React from 'react';
import InputMask, { ReactInputMask } from "react-input-mask";

type Props = {
  Level: (degree: number) => void;
  Verify: boolean;
};

const Input = (props:any) => (
    <InputMask mask="99999-999" value={props.value} onChange={props.onChange} />
  );


export const ImcCalc = ({ Level, Verify }: Props) => {
  const [inputHeight, setInputHeight] = useState<number>(0);
  const [inputWeight, setInputWeight] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);

  const imcResult = (Tall: number, weight: number) => {
    var result = weight / ((Tall * Tall) / 10000);
    setDisabled(true);
    setInputHeight(0)
    setInputWeight(0)

    if (result <= 18.5) {
      return Level(0);
    }
    if (result > 16.5 && result <= 24.9) {
      return Level(1);
    }
    if (result > 24.9 && result <= 30) {
      return Level(2);
    } else {
      return Level(3);
    }
  };
  useEffect(() => {
    setDisabled(Verify);
  });

  return (
    <C.InputArea>
        <>
        <input
            type="number"
            className="ageInput"
            required
            placeholder="Insira sua altura ex: 173"
            value={inputHeight > 0 ? inputHeight : ""}
            onChange={(e) => setInputHeight(parseFloat(e.target.value))}
            disabled={disabled ? true : false}
        />
        <br />

        <input
            type="number"
            className="weightInput"
            required
            placeholder="peso"
            value={inputWeight > 0 ? inputWeight : ""}
            onChange={(e) => setInputWeight(parseFloat(e.target.value))}
            disabled={disabled ? true : false}
        />
        <button onClick={() => imcResult(inputHeight, inputWeight)}>
            Calcular
        </button>
        </>

    </C.InputArea>
  );
};
