import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeader";
import Blackjack from "../../images/blackjack.png"; // import the images here
import FiraAIRtech from "../../images/FIRAAIR.jpg";
import FiraAIRmain from "../../images/FiraAIRcomp.png";
import D1 from "../../images/SAFMCD1.jpg"
import D2 from "../../images/SAFMC23.jpg"
import './style.scss';

// New data structure
const honorsData = [
  {
    title: "1st Place Singapore Amazing Flying Machine Competition Cat. D2 (2023)",
    description:
      "Developed an autonomous control system for collaborative drones tasked to synchronically fly and carry a payload, which is a basket filled with smaller payloads inside to be poured on a designated area. Won as the only team successfully finishing the challenge. Responsible as drone control and computer vision programmer of the Bayucaraka ITS UAV team.",
    image: D2,
  },
  {
    title: "2nd Place Singapore Amazing Flying Machine Competition Cat. D1 (2023)",
    description:
      "Designed a flight control system integrated with a custom wearable remote control, capable of controlling two drones simultaneously and switching between them. Responsible as control and computer vision programmer of the Bayucaraka ITS UAV team.",
    image: D1,
  },
  {
    title: "1st Place FIRA AIR Simulcup (2022)",
    description:
      "Developed an autonomous drone control system using ROS, PX4 flight controller software, and Python OpenCV to navigate an arena in Gazebo Simulation. Responsible as drone control and computer vision programmer of the Bayucaraka ITS UAV team.",
    image: FiraAIRmain,
  },
  {
    title: "1st Place FIRA AIR Simulcup Technical Challenge (2022)",
    description:
      "Designed a fully autonomous drone mission to loop around a moving clock-hand structure using OpenCV shape recognition. Became the only team to successfully complete the challenge. Responsible as computer vision programmer of the Bayucaraka ITS UAV team.",
    image: FiraAIRtech,
  }
];


const Awards = () => {
  return (
    <section id="awards" className="awards">
      <PageHeaderContent
        headerText="Awards"
        icon={<BsAwardFill size={40} />}
      />
        <div className="honors__content">
        {honorsData.map((item, index) => (
          <Animate
            key={index}
            play
            duration={1}
            delay={0}
            start={{
              transform:
                index % 2 === 0 ? "translateX(-1080px)" : "translateX(1080px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div
              className={`honors__content__item ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              <div className="honors__content__item__text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="honors__content__item__image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </Animate>
        ))}
      </div>


    </section>
  );
};

export default Awards;
