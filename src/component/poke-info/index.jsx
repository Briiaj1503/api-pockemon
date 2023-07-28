import React from "react";

const PokeInfo = () => {
  return (
    <>
      <h1>Charmander</h1>
      <img
        src="{https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}"
        alt=""
      />
      <div className="Habilidades">
        <div className="Grupo">
          <h2>blaze</h2>
        </div>
        <div>
          <h2>solar-power</h2>
        </div>
      </div>
      <div className="Base-start">
        <h3>Hp:30</h3>
        <h3>Ataque:52</h3>
        <h3>Defensa:43</h3>
        <h3>Ataque-Especial:50</h3>
        <h3>Velocidad</h3>

      </div>
    </>
  );
};

export default PokeInfo;
