import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import PageHeaderContent from "../../../components/pageHeader";
import robotdogllm from "../../../images/robotdogllmcover.png";
import "./style.scss";

const DogLLM = () => {
  const getYoutubeEmbedLink = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="dogllm" className="dogllm">
      <PageHeaderContent
        headerText="Robot Dog path generation using LLM"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="project__content">
        {/* Example: Paragraph on left, Image on right */}
        <div className="project__content__section">
          <div className="project__content__section__text">
            <p>
              Developed project as the final assignment for university
              graduation. Created a method for robot dog to plan its movement
              based human natural language. Utilizes ROS navigation and SLAM
              algorithm as the main autonomous control system. Robot is
              responsible as navigation guide in an indoor area. User able to
              easily talk to robot and ask to be guided to places around an area
              such as elevator, toilet and designated room
            </p>
          </div>
          <div className="project__content__section__image">
            <img src={robotdogllm} alt="Project Screenshot 1" />
          </div>
        </div>

        {/* Example: Image on left, Paragraph on right
              <div className="project__content__section project__content__section--reverse">
                <div className="project__content__section__image">
                  <img src="your-image-path-2.jpg" alt="Project Screenshot 2" />
                </div>
                <div className="project__content__section__text">
                  <p>
                    The robot can recognize obstacles, make real-time decisions, and
                    reach the target destination with minimal supervision.
                  </p>
                </div>
              </div> */}

        {/* Example: Only Image
              <div className="project__content__onlyImage">
                <img src={blackjackimg} alt="Full Screenshot" />
              </div> */}

        {/* Example: Only Paragraph
              <div className="project__content__onlyText">
                <p>
                  The architecture leverages ROS2's publisher-subscriber model,
                  ensuring a modular and scalable system design.
                </p>
              </div> */}

        {/* Example: Youtube Embed */}
        <div className="project__content__youtube">
          <iframe
            width="100%"
            height="400"
            src={getYoutubeEmbedLink(
              "https://www.youtube.com/watch?v=OlYW1hP1HRc"
            )}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Example: GitHub Link
              <div className="project__content__githubLink">
                <a
                  href="https://github.com/VGPABM/ARBlackJack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                  <span>View Source Code</span>
                </a>
              </div> */}
      </div>
    </section>
  );
};

export default DogLLM;
