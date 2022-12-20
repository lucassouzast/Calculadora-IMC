import * as C from './style';
import img from '../../img/powered.png';
import InputArea from  '../Input';

export const LeftSide = () => {
    return (
        <C.Container>
            <img src={img} alt="Logo"  width="250px"/>

            <div>
                <h1>Calcule o seu IMC</h1>
                <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde (OMS) para Calcular o peso ideal de cada pessoa.</p>
            </div>
            <InputArea>
                <input type="number" className="ageInput" placeholder="Idade"  required /> <br />
                <input type="number" className="weightInput" placeholder="Peso"  required />
                <button>Calcular</button>
            </InputArea>

        </C.Container>
    )
}