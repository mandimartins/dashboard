import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  /* color: ${(props) => props.theme.colors.white}; */
  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Profile = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
