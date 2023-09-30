import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";

export function New() {

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    if (newTag) {
      const isNewTag = !tags.includes(newTag);

      if (isNewTag) {
        setTags((prevState) => [...prevState, newTag]);
      } else {
        alert('Tag já adicionada!');
      }
    }

    setNewTag('');
    document.querySelector('#inputNewTag').focus();
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  function handleClearForm() {
    setTitle('');
    setRating('');
    setDescription('');
    setTags([]);
    setNewTag('');
  }

  function handleAddTag() {
    if (newTag) {
      const isNewTag = !tags.includes(newTag);

      if (isNewTag) {
        setTags((prevState) => [...prevState, newTag]);
      } else {
        alert('Tag já adicionada!');
      }
    }

    setNewTag('');
    document.querySelector('#inputNewTag').focus();
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  function handleClearForm() {
    setTitle('');
    setRating('');
    setDescription('');
    setTags([]);
    setNewTag('');
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Informe o título do filme!');
    }

    if (rating < 0 || rating > 5) {
      return alert('Nota inválida!');
    }

    if (newTag != '') {
      return alert(
        `Clique no + para adicionar a tag: ${newTag}. ou limpe o campo!`
      );
    }

    try {
      await api.post('/movieNotes', {
        title,
        rating: Math.floor(rating),
        description,
        tags,
      });
      alert('Filme cadastrado com sucesso!');
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar!');
      }
    }
  }
  
  return (
    <Container>
      <Header />
      <main>
        <div className="wrapper">
          <ButtonText
            to={-1}
            title="Voltar"
            icon={FiArrowLeft}
          />
          <h1>Novo filme</h1>
        </div>

          <Form>
            <div className="title-note">
              <Input 
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Input 
                placeholder="Sua nota (de 0 a 5)"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <Textarea 
              placeholder="Observações"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div>
              <h2>Marcadores</h2>
              <div className="tags">
                {tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={(e) => handleRemoveTag(tag)}
                  />
                ))}
                <MovieItem 
                  id="inputNewTag"
                  isNew
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div> 
            </div>

            <div className="buttons">
              <Button 
                isDelete 
                title="Limpar Campos" 
                onClick={handleClearForm}
              />
              <Button 
                title="Salvar alterações"
                onClick={handleNewNote}
              />
            </div>
          </Form>
      </main>
    </Container>
  );
}