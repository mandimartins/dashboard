import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  /* color: ${(props) => props.theme.colors.white}; */
  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
