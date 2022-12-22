import { useEffect, useState } from "react";
import * as C from "./style";

type Props = {
  Level: (degree: number,Result: number) => void;
  Verify: boolean;

};

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
      return Level(0, result);
    }
    if (result > 16.5 && result <= 24.9) {
      return Level(1, result);
    }
    if (result > 24.9 && result <= 30) {
      return Level(2, result);
    } else {
      return Level(3, result);
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
            placeholder="Insira sua altura ex: 173"
            value={inputHeight > 0 ? inputHeight : ""}
            onChange={(e) => setInputHeight(parseFloat(e.target.value))}
            disabled={disabled ? true : false}
        />
        <br />

        <input
            className="weightInput"
            required
            placeholder="Insira seu peso ex: 82Kg"
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
