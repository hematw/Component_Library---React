import './App.css'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'
import profileImg from "./assets/profile.png"


function App() {

  return (
    <>
    <main>

      <Badge
        allClassName={`pill success`}>
        Web master
      </Badge>

      <Banner
        edges="pill"
        type="error"
        title="Error ocurred!"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
        />

      <Card
        title="Easy deployment"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptate ducimus inventore velit suscipit."
        />

      <Testimonial 
        opnion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem voluptate quisquam voluptates. Quia, nisi."
        name="Hemat Waziri"
        job="Frontend Dev"
        img={profileImg}
        backColor="#2545b8"
        textColor="#fdfdfd"
        /> 
        </main>
    </>
  )
}

export default App
