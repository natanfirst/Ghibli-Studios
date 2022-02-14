import React from "react";
import { createStore } from "redux";

// import { Container } from './styles';

function reducer() {
  return {
    names: [
      {
        name: "teste",
      },
    ],
  };
}
const store = createStore(reducer);

export default store;
