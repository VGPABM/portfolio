import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import PageHeaderContent from "../../../components/pageHeader";
import blackjackimg from "../../../images/BlackjackCover.png";
import "./style.scss";

const BlackJack = () => {
  const getYoutubeEmbedLink = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="blackjack" className="blackjack">
      <PageHeaderContent
        headerText="AR Blackjack "
        icon={<FaGithub size={40} />}
      />

      <div className="project__content">
        {/* Example: Paragraph on left, Image on right */}
        <div className="project__content__section">
          <div className="project__content__section__text">
            <p>
              This project is an Augmented Reality (AR) Blackjack game developed
              using Python Game, OpenCV and cNN machine learning. The game is
              designed to be played in an AR environment, allowing players to
              use real cards which was detected by using a webcam and these
              cards then will be shown on the computer screen. Player then could
              choose what decisions they want to take, such as hit, stand,
              double down, or split. The game is designed to be user-friendly
              and provides a fun AR gaming experience.
            </p>
          </div>
          <div className="project__content__section__image">
            <img src={blackjackimg} alt="Project Screenshot 1" />
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
              "https://www.youtube.com/watch?v=ffk5YHtLTUw"
            )}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Example: GitHub Link */}
        <div className="project__content__githubLink">
          <a
            href="https://github.com/VGPABM/ARBlackJack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlackJack;
