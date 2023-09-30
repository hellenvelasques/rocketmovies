import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketmovies:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      error.response 
        ? alert(error.response.data.message) 
        : alert('Erro ao tentar se conectar com o servidor.')
    }  
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user');
    localStorage.removeItem('@rocketmovies:token');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadtForm = new FormData();
        fileUploadtForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadtForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));

      setData({ user, token: data.token });
      alert('Perfil atualizado com sucesso!');

      } catch (error) {
        error.response 
          ? alert(error.response.data.message) 
          : alert('Não foi possível atualizar o perfil.')
      }  
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user');
    const token = localStorage.getItem('@rocketmovies:token');

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      updateProfile,
      user: data.user }}>
      {children}
    </AuthContext.Provider>  
  )
}

function  useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };