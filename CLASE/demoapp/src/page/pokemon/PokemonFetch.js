import React, { useEffect, useState } from 'react';

export default function PokemonFetch() {

    const [listPokemon, setListPokemon] = useState([]);

    useEffect(() => {
        getPokemons()
    }, []);

    // array function
    const getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => {
                console.log("####", data.results);
                setListPokemon(data.results);
            })
            .catch((e) => {
                console.log("Fallo algo " + e);
            });
    }

    return (
        <>
            <div>PokemonFetch</div>
            <div>
                <ul>
                    {listPokemon.map((pokemon, index) => (
                        <>
                        <li key={index}>
                            <p>{pokemon.name}</p>
                            {/* <img src={pokemon.url} alt={"Foto de pokemon " + pokemon.name} /> */}
                        </li>
                        </>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}