import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, PokemonListItem } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon';

interface HomePageProps {
  pokemons: PokemonListItem[]
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {

  return (
    <>
      <Layout title={'Listado de Pokemons'}>
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((pokemon) => ( <PokemonCard key={pokemon.id} pokemon={pokemon}/> ))}
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  let pokemonId: string;
  let pokemonArr: string[];

  const pokemons = data.results.map((pokemon) => {
    pokemonArr = pokemon.url.split("/");
    pokemonId = pokemonArr[pokemonArr.length - 2];

    return {
      ...pokemon,
      id: pokemonId,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
