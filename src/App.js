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
      <Route path='/skills' element={<Skills/>}/>
     </Routes>
     </div>

     

    
    </div>
    
    
  );
}

export default App;
