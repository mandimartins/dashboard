import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 1.2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  position: relative;

  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(1rem);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
  }

  > div span {
    font-weight: 500;
    font-size: 1.8rem;
  }
`;

export const Tag = styled.div<ITagProps>`
  width: 1rem;
  height: 2.9rem;
  background-color: ${(props) => props.color};

  position: absolute;
  left: 0;
`;
