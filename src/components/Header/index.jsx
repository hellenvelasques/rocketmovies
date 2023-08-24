import { FiSearch } from 'react-icons/fi';
import { Container, Profile, Search, Brand } from "./styles";
import { Input } from "../Input";

export function Header() {

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch} 
        />
      </Search>
      
      <Profile to="/profile">
        <div>
          <strong>Hellen Velasques</strong>
          <span>sair</span>
        </div>

        <img 
          src="https://github.com/hellenvelasques.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>

  );
}