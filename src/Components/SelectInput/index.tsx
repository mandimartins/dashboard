import React from "react";
import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    lable: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.lable}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
