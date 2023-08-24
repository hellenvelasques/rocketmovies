import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
	background: transparent;
	border: 0;

	color: ${({ theme }) => theme.colors.pink};
	font-size: 18px;
	font-family: 'Roboto Slab', sans-serif;

	display: flex;
	align-items: center;
	gap: 8px;
`
