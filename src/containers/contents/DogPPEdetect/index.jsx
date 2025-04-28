import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const DogDetect = () => {
  return (
    <section id="dogdetection" className="dogdetection">
      <PageHeaderContent
        headerText="Robot Machine Learning detection"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default DogDetect;
