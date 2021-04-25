import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 26rem;

  background-color: ${(props) => props.theme.colors.tertiary};

  border-radius: 7px;

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 8px;
  }

  > header p {
    font-size: 1.8rem;
  }

  > footer span {
    font-size: 1.4rem;
  }
`;
