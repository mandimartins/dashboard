import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div``;
export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .tag-filter {
    font-size: 1.8rem;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};

    margin: 0 1rem;

    transition: opacity 0.3s;
    opacity: 0.5;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter-recurrent::after {
    content: "";
    display: block;
    width: 5.5rem;
    margin: 0 auto;
    border-bottom: 1rem solid ${(props) => props.theme.colors.success};
  }

  .tag-filter-eventual::after {
    content: "";
    display: block;
    width: 5.5rem;
    margin: 0 auto;
    border-bottom: 1rem solid ${(props) => props.theme.colors.warning};
  }

  .tag-activated {
    opacity: 1;
  }
`;
