import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.colors.background_600};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 5px 14px;

  margin-right: 6px;

  font-size: 12px;
  font-weight: 400;
`;