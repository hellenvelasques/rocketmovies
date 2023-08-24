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
		padding: 0 124px;
		grid-area: content;

		.wrapper {
			height: 70vh;
			padding-right: 16px;
			overflow-y: auto;

			&::-webkit-scrollbar {
				width: 8px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: ${({ theme }) => theme.colors.pink};
				border-radius: 50%;
			}
		}
	}

	@media (max-width: 768px) {
		main {
			padding: 0 40px;
		}

		.wrapper {
			height: 90vh !important;
		}
	}
`

export const MovieTitle = styled.div`
	max-width: 460px;
	display: flex;
	flex-direction: column;
	gap: 24px;

	margin-top: 24px;

	> .titleRating {
		display: flex;
		align-items: center;
		gap: 10px;

		h1 {
			margin-right: 8px;
		}

		svg {
			fill: ${({ theme }) => theme.colors.pink};
			stroke: ${({ theme }) => theme.colors.pink};

			width: 20px;
			height: 20px;
			margin-top: 8px;
		}
	}

	> .autorLine {
		display: flex;
		align-items: center;
		gap: 18px;
		font: normal 400 16px 'Roboto', sans-serif;

		.autor {
			display: flex;
			align-items: center;
			gap: 8px;

			img {
				width: 20px;
				height: 20px;
				border-radius: 50%;
			}
		}

		.time {
			display: flex;
			align-items: center;
			gap: 8px;

			svg {
				width: 20px;
				stroke: ${({ theme }) => theme.colors.pink};
			}
		}
	}

	> .tagsLine {
		margin-top: 16px;
	}
`
export const Content = styled.div`
	width: 100%;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	text-align: justify;
`