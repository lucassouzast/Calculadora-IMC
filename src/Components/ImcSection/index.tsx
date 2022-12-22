import * as C from "./style";
import up from "../../img/up.png";
import down from "../../img/down.png";
import { ImcCalc } from "../Input/index";
import img from "../../img/powered.png";
import left from "../../img/leftarrow.png";
import { useState } from "react";

type Props = {
  bg: string;
  title: string;
  subTitle: string;
  imgUp: boolean;
};

export const SectionImc = () => {
  const cards: Props[] = [
    {
      bg: "#97A2AC",
      title: "Magreza",
      subTitle: "IMC esta entre 0 e 18.5",
      imgUp: false,
    },
    {
      bg: "#0EAC6A",
      title: "Normal",
      subTitle: "IMC esta entre 16.5 e 24.9",
      imgUp: true,
    },
    {
      bg: "#E3B03B",
      title: "Sobre Peso",
      subTitle: `IMC esta entre 24.9 e 30`,
      imgUp: false,
    },
    {
      bg: "#C64042",
      title: "Obesidade",
      subTitle: "IMC esta entre 30 e 99",
      imgUp: false,
    },
  ];

  const [level, setLevel] = useState(0);
  const [shown, setShown] = useState(false);
  const [imcResult, setImcResult] = useState(0);
  
  const degree = (levelNumber: number, result: number) => {
    setImcResult(result)
    setLevel(levelNumber);
    setShown(true)
  };

  const handleShownOff = () => {
    setShown(false)
  }

  return (
    <>
      <C.Container>
        <img src={img} alt="Logo" width="250px" />

        <div>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde (OMS) para Calcular o peso ideal de
            cada pessoa.
          </p>
        </div>
        <ImcCalc Level={degree} Verify={shown}/>
      </C.Container>

      <>
        {shown ? (
          <C.ImcResult>
            <C.Arrow><img src={left} onClick={handleShownOff}/></C.Arrow>
            <C.Card  bg={cards[level].bg} className= 'Shown'>
                <div className="shadow">
                  <img src={cards[level].imgUp ? up : down} className= "up" />
                </div>
                <h1>{cards[level].title}</h1>
                <p>Seu IMC é {Number((imcResult).toFixed(1))}</p>
              </C.Card>
          </C.ImcResult>
        ) : (
          <C.Grid>
            {cards.map((item, index) => (
              <C.Card key={index} bg={item.bg}>
                <div className="shadow">
                  <img src={item.imgUp ? up : down} alt="" />
                </div>
                <h1>{item.title}</h1>
                <p>{item.subTitle}</p>
              </C.Card>
            ))}
          </C.Grid>
        )}
      </>
    </>
  );
};
