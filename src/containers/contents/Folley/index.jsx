import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import PageHeaderContent from "../../../components/pageHeader";
import FolleyImg from "../../../images/Folley.png";

const Folley = () => {
  const getYoutubeEmbedLink = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };
  return (
    <section id="folley" className="folley">
      <PageHeaderContent
        headerText="Folley : Smart Shopping Cart"
        icon={<FaGithub size={40} />}
      />
      <div className="project__content">
        {/* Example: Paragraph on left, Image on right */}
        <div className="project__content__section">
          <div className="project__content__section__text">
            <p>
              Designed and manufacture a fully autonomous shopping cart using
              Raspberry Pi edge computer capable of following behind shopper.
              Shopping cart is integrated with product barcode scanning and shop
              POS system for ease of transaction by the user. Work as the
              electrical designer, embedded programmer and computer vision
              programmer in a team of 3 for the computer engineering telematics
              projects.
            </p>
          </div>
          <div className="project__content__section__image">
            <img src={FolleyImg} alt="Project Screenshot 1" />
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
              "https://www.youtube.com/watch?v=YbsN83OUumE"
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

export default Folley;
