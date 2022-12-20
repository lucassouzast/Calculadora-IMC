import * as C from './style'
import up from '../../img/up.png'
import down from '../../img/down.png'
import Card from '../Card'

export const RightSide = () => {
    return (
        <C.Container>
            <Card bg={'#97A2AC'}>
                <div className='shadow'>
                    <img src={down} alt="" />
                </div>
                <h1>Magreza</h1>
                <p>IMC esta entre 0 e 18.5</p>
            </Card>
            
            <Card bg={'#0EAC6A'}>
                <div className='shadow'>
                    <img src={up} alt="" />
                </div>
                <h1>Normal</h1>
                <p>IMC esta entre 16.5 e 24.9</p>
            </Card>

            <Card bg={'#E3B03B'}>
                <div  className='shadow' >
                    <img src={down} alt="" />
                </div>
                <h1>Sobre Peso</h1>
                <p>IMC esta entre 24.9 e 30</p>
            </Card>

            <Card bg={'#C64042'}>
                <div className='shadow' >
                    <img src={down} alt="" />
                </div>
                <h1>Obesidade</h1>
                <p>IMC esta entre 30 e 99</p>
            </Card>
        </C.Container>
    )
}