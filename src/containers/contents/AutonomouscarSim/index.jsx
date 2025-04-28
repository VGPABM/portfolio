import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const AutonomousCar = () => {
  return (
    <section id="autonomouscar" className="autonomouscar">
      <PageHeaderContent
        headerText="Autonomous Car Simulation"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default AutonomousCar;
