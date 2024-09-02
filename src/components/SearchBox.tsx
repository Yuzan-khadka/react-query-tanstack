import { useContext } from "react";
import { PokemonContext } from "../contextApi/PokemonContext";
import UsePokemon from "../customHooks/UsePokemon";



const SearchBox = () => {

    const {search, setSearch} = useContext(PokemonContext);
    // const {search, setSearch} = UsePokemon();


    return ( 
        <input 
        className="mt-3 block w-full rounded-md text-black border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
        type="text" placeholder="Search pokemon" 
        value={search}
        onChange={(e) =>  setSearch(e.target.value)}
        />
     );
}
 
export default SearchBox;