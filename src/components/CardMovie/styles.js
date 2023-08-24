import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.pink_light};
  color: ${({ theme }) => theme.colors.gray_100};

  cursor: pointer;

  svg {
    stroke: ${({ theme }) => theme.colors.pink};
    fill: ${({ theme }) => theme.colors.pink};

    margin: 6px 0 15px 0;
  }

  > p {

    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray_300};
    margin-bottom: 24px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
`;