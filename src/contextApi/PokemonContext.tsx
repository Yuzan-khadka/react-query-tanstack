import { createContext } from "react";
import UsePokemon from "../customHooks/UsePokemon";

interface Props{
    children: React.ReactNode;
   }

export const PokemonContext = createContext<ReturnType<typeof UsePokemon>>(
    {} as unknown as ReturnType<typeof UsePokemon>
);

const PokemonContextProvider = (props: Props) => {

    const {pokemon, search, setSearch} = UsePokemon();

    return(
        <PokemonContext.Provider value={{pokemon, search, setSearch}}>
            {props.children}
        </PokemonContext.Provider>
    )
} 

export default PokemonContextProvider; 