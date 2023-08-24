import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.colors.background_700};
  color: ${({theme}) => theme.colors.gray_300};

  width: 100%;

  display: flex;
  align-items: center;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({theme}) => theme.colors.white};
    background-color: transparent;
    border: 0; 

    &:placeholder {
      color: ${({theme}) => theme.colors.gray_300}; 
    }
  }
  
  svg {
    margin-left: 16px;
  }
`;