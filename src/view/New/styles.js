import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 1fr auto;
	grid-template-areas:
		'header'
		'content';
	gap: 40px;

	> main {
		width: 100%;
		padding: 0 124px 124px;
		grid-area: content;

		h1 {
      font-size: 36px;
      margin: 24px 0 40px;
    }
	}
`

export const Form = styled.form`
	width: 100%;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 40px;

	text-align: justify;

  .title-note {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  h2 {
    font-size: 20px;
    color: #999591;
  }

  .tags {
    width: auto;
    display: flex;
    align-items: center;
    gap: 24px;

    margin-top: 24px;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background_900};
  }

  .buttons {
    display: flex;
    gap: 40px;
  }
`