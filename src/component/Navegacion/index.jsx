import React from "react";

const Navegacion = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokedex" className="nave-imagen" />
      </div>
      
      <div>❤️</div>
    </nav>
  );
};

export default Navegacion;
