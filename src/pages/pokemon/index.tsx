import React, { useEffect, useState } from "react";
import PokemonList from "../../components/list-movies";

import { Container, Header } from "./styles";
import { createStore } from "redux";
import { connect } from "react-redux";

interface Names {
  names: [];
}

// {value: 1}
const Pokemon: React.FC<Names> = ({names}) => {
  const [poke, setPoke] = useState({
    name: "teste",
  });


  return (
    <Container>
      {names.map((item: any) => (
      <div>
        {item.name}
      </div>
      ))}

    </Container>
  );
};

export default connect((state: Names) => ({names: state.names}))(Pokemon)
