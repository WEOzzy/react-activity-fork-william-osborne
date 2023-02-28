import { Pokemon } from "../models/Pokemon";

export default function PokemonBox(props: Pokemon) {
    return (
        <div className="box">
            <img src={props.img}/>
            <h4>{props.name}</h4>
            <p>Level: {props.level}</p>
            <p>Health: {props.health}</p>
            <p>Damage: {props.damage}</p>
        </div>
    )
}