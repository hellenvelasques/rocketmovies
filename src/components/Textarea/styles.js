import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.background_700};
  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;


  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;