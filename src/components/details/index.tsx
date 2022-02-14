import React, { useState } from "react";
import {
  AdditionalData,
  Container,
  Content,
  Description,
  LeftSide,
  MovieDescription,
  MovieImage,
  OriginalTitle,
  Title,
} from "./styles";

import { IoCloseOutline } from "react-icons/io5";

interface ShowModal {
  modal: boolean;
  setModal: (value: boolean) => void;
  details: {
    title: string;
    original_title: string;
    image: string;
    movie_banner: string;
    director: string;
    producer: string;
    release_date: string;
    description: string;
  };
}

const Details: React.FC<ShowModal> = ({ modal, setModal, details }) => {
  return (
    <Container Show={modal ? "flex" : "none"}>
      <div
        className="image-bg"
        style={{
          backgroundImage: `url(${details.movie_banner})`,
        }}
      ></div>
      <IoCloseOutline onClick={() => setModal(false)} />
      <Content>
        <LeftSide>
          <MovieImage src={details.image} />
        </LeftSide>
        <Description>
          <Title>{details.title}</Title>
          <OriginalTitle>{details.original_title}</OriginalTitle>
          <AdditionalData>Date: {details.release_date}</AdditionalData>
          <AdditionalData>Director: {details.director}</AdditionalData>
          <AdditionalData>Producer: {details.producer}</AdditionalData>
          <MovieDescription>{details.description}</MovieDescription>
        </Description>
      </Content>
    </Container>
  );
};

export default Details;
