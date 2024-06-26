import './App.css'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'
import profileImg from "./assets/profile.png"
import { HiOutlineCloudUpload } from "react-icons/hi";
import { SiSpeedtest } from "react-icons/si";



function App() {

  return (
    <>
      <main>

        <div className='flex-container'>
          <Badge
            edges={"pill"}
            firstColor="#208000"
            secondColor="#d9ffcc"
          >
            Web master
          </Badge>

          <Badge
            edges={'pill'}
            firstColor="#981C18"
            secondColor="#FEE2E1"
          >
            Web master
          </Badge>

          <Badge
            edges={'square'}
            firstColor="#002db3"
            secondColor="#b3c6ff"
          >
            Web master
          </Badge>

          <Badge
            edges={'square'}
            firstColor="#995c00"
            secondColor="#ffe0b3"
          >
            Web master
          </Badge>
        </div>

        <Banner
          type="error"
          title="Error ocurred!"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#981C18"
          secondColor="#FEE2E1"
        />

        <Banner
          title="Successfully saved!"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#208000"
          secondColor="#d9ffcc"
        />

        <Banner
          type="info"
          title="Updates available"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#002db3"
          secondColor="#cce0ff"
        />

        <Banner
          type="warning"
          title="Poor connection!"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#cca300"
          secondColor="#fff5cc"
        />

        <Card
          title="Rapid development"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptate ducimus inventore velit suscipit."
          icon={<SiSpeedtest />}
          firstColor="#f95f39"
          secondColor="#1a1a19"
          textColor="#fdfdfd"
        />

        <Card
          title="Easy deployment"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptate ducimus inventore velit suscipit."
          icon={<HiOutlineCloudUpload />}
          firstColor="#f95f39"
        />

        <Testimonial
          opnion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem voluptate quisquam voluptates. Quia, nisi."
          name="Hemat Waziri"
          job="Frontend Dev"
          img={profileImg}
          backColor="#2545b8"
          textColor="#fdfdfd"
        />

        <Testimonial
          opnion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem voluptate quisquam voluptates. Quia, nisi."
          name="Hemat Waziri"
          job="Frontend Dev"
          img={"https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/13/2023/12/09/20231209_135156-1089983506.jpg"}
          backColor="#f95f39"
          textColor="#fff"
        />
      </main>
    </>
  )
}

export default App
