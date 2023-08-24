import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.pink};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_100};
  }
  
  > h2 {
    margin: 48px 0;

    font-size: 24px;
    font-weight: 500;
  }

  > a {
    color: ${({ theme }) => theme.colors.pink};
    margin-top: 124px;
    text-align: center;
  }  
`;

//Change image
export const Background = styled.div`
  flex: 1;
  background: url(https://www.lavieeco.com/wp-content/uploads/2022/09/97899.jpg) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`;