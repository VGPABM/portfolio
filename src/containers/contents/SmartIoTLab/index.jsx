import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const SmartLab = () => {
  return (
    <section id="smartlab" className="smartlab">
      <PageHeaderContent
        headerText="Smart IoT Lab"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default SmartLab;
