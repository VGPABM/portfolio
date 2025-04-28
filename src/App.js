import './App.scss';

import { useEffect, useMemo, useState } from "react";
import {HashRouter,Routes, Route, useLocation} from 'react-router-dom'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Use slim for lighter bundle
import About from './containers/about';
import Home from './containers/home';
import Projects from './containers/projects/index.jsx';
import Awards from './containers/Awards/index.jsx';
import Skills from './containers/skills';
import Contact from './containers/contact';
import AutonomousCar from './containers/contents/AutonomouscarSim';
import BlackJack from './containers/contents/Blackjack';
import CVRobotControl from './containers/contents/Compvisrobotcontrol';
import DogLLM from './containers/contents/DogLLM';
import DogDetect from './containers/contents/DogPPEdetect';
import Folley from './containers/contents/Folley';
import DigiClock from './containers/contents/SmartDigitalClock';
import SmartLab from './containers/contents/SmartIoTLab';
import Xsite from './containers/contents/XSite';

import Navbar from './components/navBar';
import particlesOptions from "./utils/particles.js"

function App() {

  const  location = useLocation();
  const [init, setInit] = useState(false);

  const renderParticleJsInHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
      // if you really need loadFull (everything), you can still import loadFull instead
      // await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    
      <div className="App">
     {/*particles js */}
     {renderParticleJsInHome && init && (<Particles id="particle" particlesLoaded={particlesLoaded}options={particlesOptions}/>) }

     {/*navbar */}
     <Navbar/>

     {/*main page */}

     <div className="App__main-page-content">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/awards' element={<Awards/>}/>
      <Route path='/autonomouscar' element={<AutonomousCar/>}/>
      <Route path='/arblackjack' element={<BlackJack/>}/>
      <Route path='/compvisrobot' element={<CVRobotControl/>}/>
      <Route path='/dogllm' element={<DogLLM/>}/>
      <Route path='/dogmachinelearning' element={<DogDetect/>}/>
      <Route path='/folley' element={<Folley/>}/>
      <Route path='/digitalclock' element={<DigiClock/>}/>
      <Route path='/smartiotlab' element={<SmartLab/>}/>
      <Route path='/xsite' element={<Xsite/>}/>
      {/* <Route path='/skills' element={<Skills/>}/> */}
     </Routes>
     </div>

     

    
    </div>
    
    
  );
}

export default App;
