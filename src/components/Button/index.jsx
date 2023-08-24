import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function Button({ title, isDelete = false, loading = false, icon, ...rest }) {

  return (
  <Container 
    type="button"
    disabled={loading}
    icon={icon}
    $isdelete={isDelete}
    {...rest}
    >
    { icon }  
    { loading ? 'Carregando...' : title }
  </Container>
  )
}