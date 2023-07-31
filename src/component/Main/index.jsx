import React, { useEffect, useState } from "react";
import Card from "../Card/index";
import PokeInfo from "../poke-info";
import axios from "axios";

const Prins = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [urlSig, setUrlSig] = useState();
  const [urlPrev, setUrlPrev] = useState();

  const funciPoke = async () => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res)
    setUrlSig(res.data.next);
    setUrlPrev(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false)
    console.log(pokeData)
  };


  const getPokemon=async(res)=>{
    res.map(async(item)=>{
       const result=await axios.get(item.url)
       console.log(result.data)
       setPokeData(state=>{
           state=[...state,result.data]
           state.sort((a,b)=>a.id>b.id?1:-1)
           return state;
       })
    })   
 }

  useEffect(() => {
    funciPoke();
  }, [url]);



  return (
    <>
      <div className="contenedor">
        <div className="izq-contenedor">
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="btn-grupo">
            <button>Previo</button>
            <button>siguiente</button>
          </div>
        </div>
        <div className="dere-contenedor">
          <PokeInfo />
        </div>
      </div>
    </>
  );
};

export default Prins;
