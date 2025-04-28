import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../../components/pageHeader";

const DogLLM = () => {
  return (
    <section id="dogllm" className="dogllm">
      <PageHeaderContent
        headerText="Robot Dog path generation using LLM"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default DogLLM;
