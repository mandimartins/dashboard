import React, { useState, useMemo } from "react";

import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import listOfMonths from "../../utils/months";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

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
      value: "Yennefer",
      lable: "Yennefer",
    },
  ];

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        lable: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        lable: month,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Invalid month value. Is accepted 0 - 24. ");
    }
  };

  const handleYearSelected = (month: string) => {
    try {
      const parseYear = Number(month);
      setMonthSelected(parseYear);
    } catch (error) {
      throw new Error("Invalid month value. Is accepted 0 - 24. ");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FBEC61">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
