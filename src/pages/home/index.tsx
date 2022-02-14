import React, { useEffect, useState } from "react";
import List from "../../components/list-movies";
import Details from "../../components/details";
import Repository from "../../config/repository";

import { Container, Title } from "./styles";

const Home: React.FC = () => {
  const api = new Repository();
  const [modalOpen, setModalOpen] = useState(false);
  const [movies, setMovies] = useState<any>([]);
  const [movie, setMovie] = useState<any>({});
  const [id, setId] = useState<any>();

  const getMovie = async () => {
    try {
      const response = await api.getMovies();
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieDetails = async (id: string) => {
    try {
      const response = await api.getMovieId(id);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();

    if (modalOpen) {
      getMovieDetails(id);
    }
  }, [modalOpen]);

  if (!movies) {
    return <h1>Loding</h1>;
  }

  return (
    <Container>
      <Title>Ghibli Studios</Title>
      <List cards={movies} setShowModal={setModalOpen} setMovieId={setId} />
      <Details setModal={setModalOpen} modal={modalOpen} details={movie} />
    </Container>
  );
};

export default Home;
