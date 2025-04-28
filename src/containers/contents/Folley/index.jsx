import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const Folley = () => {
  return (
    <section id="folley" className="folley">
      <PageHeaderContent
        headerText="Folley : Smart Shopping Cart"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Folley;
