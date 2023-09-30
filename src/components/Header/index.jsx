import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';
import { Container, Profile, Search, Brand, ProfileAvatar, ProfileName, Logout } from "./styles";
import { Input } from "../Input";
import placeholderAvatar from '../../assets/avatar_placeholder.svg';

export function Header({ onChange}) {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    setTimeout(() => {
      navigate('/');
    }, 200);  
      
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar;

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch}
          onChange={onChange}
        />
      </Search>
      <div style={{ display: 'inline-flex', alignItems:'center'}}>
        <Profile>
          <ProfileName to="/profile">
            <div>
              <strong>{user.name}</strong>
            </div>
          </ProfileName>
          <Logout 
            onClick={handleSignOut}
            >
            sair
          </Logout>
        </Profile>
        <ProfileAvatar to="/profile">
          <img 
            src={avatarUrl}
            alt={user.name}
          />
        </ProfileAvatar>
      </div>
    </Container>
  );
}