import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import Blackjack from "../../images/BlackjackCover.png";
import Folley from "../../images/Folley.png";
import robotdogLLM from "../../images/robotdogllmcover.png";
import smartlab from "../../images/smartiotlab.png";
import XSite from "../../images/XSite.png";
import robotdogPPE from "../../images/robotdogPPE.png";

import "./style.scss";

const portofolioData = [
  {
    id: 2,
    name: "AR Black Jack Game",
    image: Blackjack,
    link: "/arblackjack",
  },
  {
    id: 3,
    name: "Smart IoT Lab",
    image: smartlab,
    link: "/smartiotlab",
  },
  // {
  //   id: 3,
  //   name: "XSite-V2 : BTS Monitoring",
  //   image: XSite,
  //   link: "/xsite",
  // },
  {
    id: 4,
    name: "Folley : Smart Shopping Cart",
    image: Folley,
    link: "/folley",
  },
  {
    id: 4,
    name: "Robot Dog with LLM",
    image: robotdogLLM,
    link: "/dogllm",
  },
  // {
  //   id: 4,
  //   name: "Robot Dog ML Detection",
  //   image: robotdogPPE,
  //   link: "/dogmachinelearning",
  // },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Software",
  },
  {
    filterId: 3,
    label: "IoT System",
  },
  {
    filterId: 4,
    label: "Robotics",
  },
];

const Projects = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoverValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  const filteredItems =
    filteredvalue === 1
      ? portofolioData
      : portofolioData.filter((item) => item.id === filteredvalue);

  function handleHover(index) {
    setHoverValue(index);
  }

  const navigate = useNavigate();

  return (
    <section id="projects" className="projects">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portofolio__content">
        <ul className="portofolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portofolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portofolio__content__cards__item"
              key={`cardItem ${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portofolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>

              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => navigate(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
