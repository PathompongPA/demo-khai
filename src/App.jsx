import './App.css'
import { Button, Presentation } from './components'
import AutoSwitch from './components/autoSwitch/autoSwitch.component'
import Card from './components/card/card.component'
import Navbar from './components/navbar/navbar.component'
import Slide1 from './components/slides/slide1.component'
import Slide2 from './components/slides/slide2.component'

function App() {

  return (
    <div className="flex flex-col justify-center items-center w-screen ">
      <Navbar />
      <AutoSwitch>
        <Presentation />
        <Slide1 />
      </AutoSwitch>
      <Slide2 />
    </div>
  )
}

export default App
