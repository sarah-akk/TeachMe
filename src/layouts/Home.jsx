import { Outlet } from 'react-router-dom';
import Navbar from '../componemnts/Navbar.jsx';
import TopBar from '../componemnts/Topbar.jsx';
import Background from "../assets/background2.png"

const Home = () => {
  return (
    <div className="flex flex-col overflow-y-hidden home-scroll"  
    style={{ backgroundImage: `url(${Background})` , backgroundColor:"#F5F6FA" ,  backgroundRepeat: "repeat", backgroundSize: "auto", }}>
    <TopBar />
    <div className="flex flex-1">
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <Navbar />
    </div>
  </div>
  )
}

export default Home;
