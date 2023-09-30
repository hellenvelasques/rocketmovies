import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

> main {
    width: 100%;
    padding: 0 124px;
  }

  > .titleLine {
		display: grid;
		grid-template-rows: 1fr auto;
		grid-template-columns: 1fr auto;

		align-items: center;

		padding: 0 124px;
	}

  .header-home {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 38px 0;

    > button {
      width: auto;
      padding: 0 40px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  } 
`;

export const ButtonLink = styled(Link)``;