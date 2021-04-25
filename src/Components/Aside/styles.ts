import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding-left: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 7rem;
`;

export const LogoImg = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const Title = styled.header`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.white};
  margin-left: 1rem;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.info};
  font-size: 1.8rem;
  text-decoration: none;
  margin: 0.7rem 0;
  transition: opacity 2s;
  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 2.2rem;
    margin-right: 0.5rem;
  }
`;
