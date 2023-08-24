import {FiPlus} from "react-icons/fi";
import { Container, ButtonLink } from "./styles";


import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { CardMovie } from "../../components/CardMovie";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="header-home">
          <h1>Meus filmes</h1>
          <ButtonLink to="/new">
            <Button icon={<FiPlus />} title="Adicionar filme" />
          </ButtonLink>
        </div>

        <CardMovie />
      </main>       
    </Container>
  );
}