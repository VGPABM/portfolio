import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const Xsite = () => {
  return (
    <section id="xsite" className="xsite">
      <PageHeaderContent
        headerText="X-Site V2 : BTS Monitoring"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Xsite;
