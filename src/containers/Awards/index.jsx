import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";

const Awards = () => {
  return (
    <section id="awards" className="awards">
      <PageHeaderContent
        headerText="Honors and Awards"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Awards;
