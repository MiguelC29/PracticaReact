import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function PokemonAxios() {

    const [listPokemon, setListPokemon] = useState([]);

    useEffect(() => {
        getPokemons()
    }, []);

    // array function
    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => {
                setListPokemon(response.data.results)
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <>
        <div>PokemonAxios</div>
            <div>
            <ul style={{listStyle: 'none'}}>
                    {listPokemon.map((pokemon, index) => (
                        <>
                        <li key={index}>
                            <p>{pokemon.name}</p>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} alt={"Foto de pokemon " + pokemon.name}/>
                        </li>
                        </>
                    ))}
                    
                </ul>
            </div>
            </>
    )
}