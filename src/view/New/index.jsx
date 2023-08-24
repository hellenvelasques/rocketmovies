import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";

export function New() {
  
  return (
    <Container>
      <Header />
      <main>
        <div className="wrapper">
          <ButtonText
            to="/"
            title="Voltar"
            icon={FiArrowLeft}
          />
          <h1>Novo filme</h1>
        </div>

          <Form>
            <div className="title-note">
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>
            <Textarea placeholder="Observações" />

            <div>
              <h2>Marcadores</h2>
              <div className="tags">
                <MovieItem value="Ficção científica"/>
                <MovieItem value="Novo marcador" isNew />
              </div> 
            </div>

            <div className="buttons">
              <Button isDelete title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </Form>
      </main>
    </Container>
  );
}