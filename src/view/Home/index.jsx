import {FiPlus} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { CardMovie } from "../../components/CardMovie";
import { Container, ButtonLink } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";




export function Home() {

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
}, [search]);
  
  return (
    <Container>
      <Header 
        isSearch
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <main>
        <div className="header-home">
          <h1>Meus filmes</h1>
          <ButtonLink to={"/new"}>
            <Button 
              icon={<FiPlus />} 
              title="Adicionar filme"
            />
          </ButtonLink>
        </div>

        {notes.map((note) => (
          <CardMovie
            key={String(note.id)}
            data={note}
            onClick={() => {
              handleDetails(note.id);
            }}
          ></CardMovie>
        ))}
      </main>       
    </Container>
  );
}