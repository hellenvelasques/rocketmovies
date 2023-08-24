import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.background_800};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;  