import { useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocketmovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          type="text" 
          placeholder="E-mail" 
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input 
          type="password" 
          placeholder="Senha" 
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />

        <Button 
          type="button" 
          title="Entrar"
          onClick={handleSignIn}
        />


        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />

    </Container>
  );
}