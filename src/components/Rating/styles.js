import styled from "styled-components";

export const Container = styled.ul`
  margin: 10px 0;
  display: flex;
  gap: 2px;

  li {
    list-style: none;
    color: ${({ theme }) => theme.colors.pink};
  }
`;