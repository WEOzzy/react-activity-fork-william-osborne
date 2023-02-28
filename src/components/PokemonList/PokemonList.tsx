import { useState } from "react"
import { Pokemon } from "../models/Pokemon"
import axios from "axios"
import PokemonBox from "../PokemonBox/PokemonBox"
import { PokemonAPI } from "../models/PokemonAPI"

export function PokemonList() {
    const newPokemon: Pokemon = {
        damage: 0,
        health: 0,
        img: "png",
        level: 0,
        name: ""
    }

    const [listOfPokemon, setListPoke] = useState<Pokemon[]>([
        {
            damage: 20,
            health: 100,
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            level: 3,
            name: "Ditto"
          },
          {
            damage: 20,
            health: 100,
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            level: 3,
            name: "Charmander"
          },
          {
            damage: 20,
            health: 100,
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            level: 3,
            name: "Pikachu"
          }
    ]   
    )

    function onSubmitP(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        // send request using Axios
        axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name}`)
        .then(response => {
            console.log(response.data);
            let poke: Pokemon = {
                damage: response.data.stats[0].base_stat,
                health: response.data.stats[1].base_stat,
                img: response.data.sprites.front_default,
                level: 10,
                name: response.data.name
            }
            setListPoke([poke, ...listOfPokemon])
        })
    }

    function setNameP(event: React.ChangeEvent<HTMLInputElement>) {
        newPokemon.name = event.target.value;
    }

    return (
    <div>
        <h3>Add Pokemon via PokeAPI</h3>
        <form className="grid" onSubmit={onSubmitP}>
            <label>Name</label>
            <input type="text" onChange={setNameP}></input>
            <br/>
            <input type="submit"></input>
        </form>
        <h2>Pokemon List</h2>
        <div className="grid-pokemon">
            {
               listOfPokemon.map(poke => {
                return<PokemonBox key={poke.name}{...poke}/>
               })
            }
        </div>
    </div>
    )
}