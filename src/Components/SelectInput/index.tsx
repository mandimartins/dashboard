import React from 'react';
import { Container } from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    lable: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option) => {
          return <option key={option.value} value={option.value}>{option.lable}</option>;
        })}
      </select>
    </Container>
  );
};

export default SelectInput;
