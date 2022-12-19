import * as C from './App.Styles'
import {LeftSide} from './Components/LeftSide'
import {RightSide} from './Components/RightSide'


function App() {

  return (
    <C.Container>
      <LeftSide/>
      <RightSide/>
    </C.Container>
  )
}

export default App
