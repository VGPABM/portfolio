import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import PageHeaderContent from "../../../components/pageHeader";
import smartiotlabimg from "../../../images/smartiotlab.png";
import "./style.scss";

const SmartLab = () => {
  const getYoutubeEmbedLink = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };
  return (
    <section id="smartlab" className="smartlab">
      <PageHeaderContent
        headerText="Smart IoT Lab"
        icon={<FaGithub size={40} />}
      />
      <div className="project__content">
        {/* Example: Paragraph on left, Image on right */}
        <div className="project__content__section">
          <div className="project__content__section__text">
            <p>
              Project done as part of the department of Computer Engineering
              Robotics and Intelligent System Laboratory. Developed a Smart IoT
              Lab as laboratory improvement program. The project is designed to
              be a smart laboratory that can be used for various purposes such
              as a smart classroom, smart laboratory, and smart office. IoT
              devices and sensors include temperature, humidity, motion sensors,
              camera, and automated devices like blinds and lights. The system
              is designed to be user-friendly and provides long-range wireless
              control and monitoring utilizing ITS Wide Area Network.
              Integrate sensor using Home Asisstant as the dashboard and use MQTT as the main communication protocol.
            </p>
          </div>
          <div className="project__content__section__image">
            <img src={smartiotlabimg} alt="Project Screenshot 1" />
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
              "https://www.youtube.com/watch?v=4GX43hQIGcU"
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

export default SmartLab;
