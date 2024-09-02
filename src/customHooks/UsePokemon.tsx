import {
  useQuery,
} from '@tanstack/react-query';

import { useCallback, useEffect, useMemo, useReducer } from "react";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

function UsePokemon(): { pokemon: Pokemon[], search: string; setSearch: (search: string) => void } {
  // const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  // const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  // const [value, setValue] = useState<string>("");

  const {data: pokemon} = useQuery<Pokemon[]>({
  queryKey: ['pokemon'],
  queryFn: async () => {
    const response = await fetch(
      "../public/pokemon.json",
    )
    return await response.json()
  },
  initialData : [],
});

  type PokemonState = {
    search: string;
  };

  type PokemonAction = {
    type: "setSearch";
    payload: string;
  };

  const [{ search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      search: "",
    }
  );


  const setSearch = useCallback((search: string) => {
    dispatch({
        type: "setSearch",
        payload: search
    })
  }, []);

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 20);
  }, [pokemon, search]) ;

  const sortedPokemon = useMemo(() => {
    return filteredPokemon.sort((a, b) => a.name.localeCompare(b.name))
  }, [filteredPokemon]); 
     
  return { pokemon: sortedPokemon, search, setSearch };
}

export default UsePokemon;
  