import React, { useState } from "react";

import { Container, Cart, Description } from "./styles";

interface Cards {
  cards: [];
  showModal?: boolean;
  setShowModal: (value: boolean) => void;
  setMovieId: (value: string) => void;
}

const List: React.FC<Cards> = ({ cards, showModal, setShowModal, setMovieId }) => {
  const show = ( id: string) => {
    setShowModal(true);
    setMovieId(id);
  };

  return (
    <Container>
      {cards?.map((card: any, index) => (
        <Cart key={index} onClick={() => show(card.id)}>
          <h2>{card.value}</h2>
          <img src={card.image} alt="" />
          {/* <Description BgColor="green">{card.title}</Description> */}
        </Cart>
      ))}
    </Container>
  );
};

export default List;
