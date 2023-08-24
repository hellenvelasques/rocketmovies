import { Container } from './styles'; 

// eslint-disable-next-line react/prop-types
export function Button({ title, loading = false, icon, ...rest }) {

  return (
  <Container 
    type="button"
    disabled={loading}
    icon={icon}
    {...rest}
    >
    { icon }  
    { loading ? 'Carregando...' : title }
  </Container>
  )
}