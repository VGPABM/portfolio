import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const DigiClock = () => {
  return (
    <section id="digiclock" className="digiclock">
      <PageHeaderContent
        headerText="Smart Digital Clock with IoT"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default DigiClock;
