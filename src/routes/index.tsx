import { createFileRoute } from "@tanstack/react-router";
import SearchBox from "../components/SearchBox";
import PokemonList from "../components/PokemonList";

export const Route = createFileRoute("/")({
  component: () => (
        <>
      <SearchBox />
      <PokemonList />
      </>
  ),
});
