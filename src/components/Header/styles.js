import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray_200};

  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 34px 123px;

`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.colors.pink};
  }
`;

export const Profile = styled.a`
  display: flex;
  align-items: center;

  text-align: right;

  > img { 
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 10px;
    border: 2px solid ${({ theme }) => theme.colors.gray_200};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Logout = styled.a`
  border: none;
  background: none;
`;

export const Search = styled.div`
  width: 630px;
`;