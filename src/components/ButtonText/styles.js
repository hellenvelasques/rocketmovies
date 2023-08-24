import styled from 'styled-components'

export const Container = styled.button`
	background: transparent;
	border: 0;

	color: ${({ theme }) => theme.colors.pink};
	font-size: 18px;
	font-family: 'Roboto Slab', sans-serif;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`
