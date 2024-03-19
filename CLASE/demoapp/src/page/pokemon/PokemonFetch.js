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
                <ul style={{listStyle: 'none'}}>
                    {listPokemon.map((pokemon, index) => (
                        <>
                        <li key={index}>
                            <p>{(index + 1) + ". " + pokemon.name}</p>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} alt={"Foto de pokemon " + pokemon.name}/>
                        </li>
                        </>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}