import * as C from './style'
import up from '../../img/up.png'
import down from '../../img/down.png'

export const RightSide = () => {
    return (
        <C.Container>
            <C.Gray>
                <div className='shadow'>
                    <img src={down} alt="" />
                </div>
                <h1>Magreza</h1>
                <p>IMC esta entre 0 e 18.5</p>
            </C.Gray>
            
            <C.Green >
                <div className='shadow'>
                    <img src={up} alt="" />
                </div>
                <h1>Normal</h1>
                <p>IMC esta entre 16.5 e 24.9</p>
            </C.Green>

            <C.Yellow>
                <div  className='shadow' >
                    <img src={down} alt="" />
                </div>
                <h1>Sobre Peso</h1>
                <p>IMC esta entre 24.9 e 30</p>
            </C.Yellow>

            <C.Red>
                <div className='shadow' >
                    <img src={down} alt="" />
                </div>
                <h1>Obesidade</h1>
                <p>IMC esta entre 30 e 99</p>
            </C.Red>
        </C.Container>
    )
}