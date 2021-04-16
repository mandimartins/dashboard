import React from "react";

import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Ciri",
      lable: "Ciri",
    },
    {
      value: "Geralt",
      lable: "Geralt",
    },
    {
      value: "Raven",
      lable: "Raven",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FBEC61">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
