import { Grid } from "@nextui-org/react"
import { FavouriteCardPokemon } from "./"

interface FavouritePokemonProps {
    favouritePokemons: number[]
}


export const FavouritePokemons: React.FC<FavouritePokemonProps> = ({favouritePokemons}) => {

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
            favouritePokemons?.map( id => (
              <FavouriteCardPokemon pokemonId={id} key={id}/>
            ))
        }
  </Grid.Container>
  )
}
