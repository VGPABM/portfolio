import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import{Animate} from 'react-simple-animate'
import "./style.scss"

const Home=()=>{
    const [breaks, setBreaks] = useState(0); // 0 = no break, 1 = one break, 2 = two breaks

    const navigate = useNavigate();
    console.log(navigate);
    const handleNavigateToContactMe=()=>{
        navigate('/contact');
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 920) {
            setBreaks(2); // Very small screen
          } else if (window.innerWidth <= 1400) {
            setBreaks(1); // Small screen
          } else {
            setBreaks(0); // Large screen
          }
        };
    
        // Initial check
        handleResize();
    
        // Listen for resize events
        window.addEventListener("resize", handleResize);
    
        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return(
        <section id="home" className="home">
             <div className={`home__text-wrapper ${breaks > 0 ? "active" : ""}`}>
        <h1>
            {breaks === 1 ? (
                <>
                Vincentius Gusti 
                <br />
                Putu Agung
                <br />
                Bagus Mahendra
                <br />
                <br />
          Software Engineer
                </>
            ) : breaks === 2? (
                <>
                Vincentius Gusti Putu 
                <br />
                Agung Bagus Mahendra
                <br />
                <br />
          Software Engineer
                </>
            ) : (
                <>
                Vincentius Gusti Putu  Agung Bagus Mahendra
                <br />
                Software Engineer
                </>
            )}
          
        </h1>
      </div>

      <Animate play duration={1} delay={2.2} start={{transform: 'translateY(550px)'}} end={{transform: 'translateX(0px)'}}>
      <div className="home__contact-me"> 
        <button onClick={handleNavigateToContactMe}>Contact me</button>
      </div>
      </Animate>

      
        </section>
    )
}

export default Home;