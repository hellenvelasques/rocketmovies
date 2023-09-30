import { Container, MovieTitle, Content } from "./styles";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

export function Details() {

  const { user } = useAuth();

  const [data, setData] = useState({});
  const [newDate, setNewDate] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  function handleBack() {
    navigate(-1);
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data);
    }

    async function fetchDate() {
      const dateResponse = await api.get(`/movieNotes/${params.id}`);
      const { created_at } = dateResponse.data;
      const finalDate = new Date(created_at).toLocaleDateString();
      setNewDate(finalDate);
    }

    fetchNotes();
    fetchDate();
  }, []);
  
  return (
    <Container>
      <Header />
      <main>
        <div className="wrapper">
          <ButtonText
            title="Voltar"
            icon={FiArrowLeft}
            onClick={handleBack}
          />

          <MovieTitle>
            <div className="titleRating">
              <h1>{data.title}</h1>
              <Rating data={data}/>
            </div>


            <div className="autorLine">
              <div className="autor">
                <img
                  src={avatarUrl}
                  alt={user.name}
                />
                <p>Por {user.name}</p>
              </div>
              <div className="time">
                <FiClock />
                <p>{newDate}</p>
              </div>
            </div>
            <div>
            {data.tags &&
                data.tags.map((tag) => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))}
            </div>
          </MovieTitle>

          <Content>
            <p>{data.description}</p>
          </Content>
        </div>
      </main>
    </Container>
  );
}