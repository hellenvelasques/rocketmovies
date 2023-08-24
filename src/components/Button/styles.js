import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, isDelete }) => isDelete ? "transparent" : theme.colors.pink};
  color: ${({ theme, isDelete }) => isDelete ? theme.colors.pink : theme.colors.background_800};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 56px;
  border: ${({ theme, isDelete }) => isDelete ? `1px solid ${theme.colors.pink}` : "none"};
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;  