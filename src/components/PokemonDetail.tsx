import { useContext } from "react";
import { PokemonContext } from "../contextApi/PokemonContext";
import { Route } from "../routes/pokemon/$id";
import { Link } from "@tanstack/react-router";

const PokemonDetail = () => {


    const { id } = Route.useParams();

    const {pokemon} = useContext(PokemonContext);

    const pokemonData = pokemon.find((pok) => pok.id === +id);

    return ( 
        <>
        {!pokemonData && <div>No Data Found !!!</div>}
        {pokemonData && <div>{JSON.stringify(pokemonData)}</div>}
        <div className="mt-3 text-gray-900 text-sm font-medium">
            <Link to="/">
            <h1 className="text-2l font-bold mb-5">&lt; Home</h1>
            </Link>
            <div className="grid grid-cols-2">
            <img 
                            className="w-96 h-96 flex-shrink-0 mx-auto bg-black rounded-xl"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData?.id}.png`} alt="" />

                 <div className="ml-3">
                    <h2 className="text-2xl font-bold">{pokemonData?.name}</h2>
                    <div className="mt-3">
                        <h3 className="text-xl font-bold">
                            <ul className="mt-3">
                                {[
                                    "hp",
                                    "attack",
                                    "defense",
                                    "special_attack",
                                    "special_defense",
                                    "speed",
                                ].map((stat) =>(
                                    <li key={stat} className="grid grid-cols-2">
                                        <span className="font-bold">{stat}</span>
                                        <span>{pokemonData?.[stat as keyof typeof pokemonData]}</span>

                                    </li>
                                ))
                                }
                            </ul>
                        </h3>
                    </div>
                 </div>         

            </div>
        </div>
        </>
     );
}
 
export default PokemonDetail;