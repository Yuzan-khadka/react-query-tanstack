import { createFileRoute } from '@tanstack/react-router'
import PokemonDetail from '../../components/PokemonDetail'

export const Route = createFileRoute('/pokemon/$id')({
  component: () => <PokemonDetail/>
})