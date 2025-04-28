import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const CVRobotControl = () => {
  return (
    <section id="cvrobotcontrol" className="cvrobotcontrol">
      <PageHeaderContent
        headerText="Computer Vision Robot Controller"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default CVRobotControl;
