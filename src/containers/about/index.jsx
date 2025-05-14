import React, { useState, useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import { Animate } from "react-simple-animate";
import "./style.scss";

import { FaMicrochip, FaLinux, FaRssSquare, FaRobot } from "react-icons/fa";

import { DiPython, DiRasberryPi } from "react-icons/di";

const jobSummary =
  "Final year computer engineering student at Institut Teknologi Sepuluh Nopember specialized in Robotic and Intelligent System. My expertise is in the field of computer-vision, machine learning and AI development and implementation. Experienced in embedded system, Internet of Things and robotics development. Highly adaptable and fast learner who works effectively in a team environment.";

const personalDetails = [
  {
    label: "Name",
    value: "Vincentius Gusti Putu Agung Bagus Mahendra",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Country",
    value: "Indonesia",
  },
  {
    label: "Email",
    value: "vincentiusgt23@gmail.com",
  },
];

const educationDetails = [
  {
    title: "Institut Teknologi Sepuluh Nopember Surabaya",
    subtitle: "Bachelor Degree of Computer Engineering – GPA 3.71",
    date: "2021 - now",
  },
];

const workExperiences = [
  {
    position: "New Venture and Technology Incubation Intern",
    company: "PT. XL Axiata, Jakarta – Indonesia",
    period: "February 2024 – June 2024",
    tasks: [
      "Worked with team to develop IoT solutions for XL Axiata.",
      "Main programmer for embedded systems; work with UI/UX team.",
      "Developed web-based IoT projects (monitoring & detection).",
    ],
  },
  {
    position: "Head Coordinator",
    company:
      "B401 Robotic and Intelligence Laboratory ITS, Surabaya – Indonesia",
    period: "September 2023 – Present",
    tasks: [
      "Maintain smart laboratory system on Home Assistant.",
      "Developed victim and PPE detection on Lite 3 robot dog.",
      "Worked as practicum assistant and coordinator.",
    ],
  },
];

const About = () => {
  const [breaks, setBreaks] = useState(0);

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

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(-1080px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Software Engineer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.25}
            delay={0}
            start={{ transform: "translateX(2500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  {/* <span className="value">
                    {item.label === "Name" && breaks >= 1
                      ? item.value.broken
                      : item.value.full || item.value}
                  </span> */}

                  <span className="title">{item.value}</span>
                </li>
              ))}
            </ul>
            <h3 className="personalInformationHeaderText">Education</h3>
            {educationDetails.map((item, index) => (
              <div
                key={index}
                className="about__content__personalWrapper__education"
              >
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
                <p>{item.date}</p>
              </div>
            ))}

            <h3 className="personalInformationHeaderText">Work Experience</h3>
            {workExperiences.map((work, index) => (
              <div
                key={index}
                className="about__content__personalWrapper__experience"
              >
                <h4>{work.position}</h4>
                <h5>{work.company}</h5>
                <p>{work.period}</p>
                <ul>
                  {work.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaMicrochip className="about__icon" color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <FaLinux className="about__icon"color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <FaRssSquare className="about__icon" color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaRobot className="about__icon" color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiPython className="about__icon" color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiRasberryPi className="about__icon" color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
