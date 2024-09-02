import { useContext } from "react";
import { PokemonContext } from "../contextApi/PokemonContext";
import UsePokemon from "../customHooks/UsePokemon";
import { Link } from "@tanstack/react-router";

const PokemonList = () => {

    const {pokemon} = useContext(PokemonContext);
    // const {pokemon} = UsePokemon();


    return ( 
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
            {pokemon.map((pok)=> {

                return(
                    <Link key={pok.id} to='/pokemon/$id' params={{ id: pok.id.toString() }}>
                    <li 
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="flex-1 flex flex-col p-8">
                            <img 
                            className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pok.id}.png`} alt="" />
                            <h3 className="mt-6 text-gray-900 text-sm font-medium">
                                {pok.name}
                            </h3> 
                        </div>
                      
                    </li>
                    </Link>
                )

            })}
        </ul>
     );
}
 
export default PokemonList;