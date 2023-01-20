
import { useEffect, useState } from 'react';

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces/pokemon-item';
import { pokeApi } from '@/api';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { localFavourites } from '@/utils';

interface PokemonPageProps {
  pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon}) => {

  const [ isInFavourites, setIsInFavourites ] = useState( false );

  useEffect(() => {
    setIsInFavourites( localFavourites.existsInFavourites(pokemon.id) );
  }, [pokemon.id]); 

  console.log(isInFavourites);

  const toggleFavourite = () => {
    localFavourites.toggleFavourites(pokemon.id);
    setIsInFavourites( !isInFavourites );
  }

  return (
    <Layout title={`${pokemon.name}`}>
        <h1>{pokemon.name}</h1>
        <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
          <Grid xs={ 12 } sm={ 4 } >
            <Card hoverable css={{ padding: '30px' }}>
                <Card.Body>
                  <Card.Image 
                    src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                    alt={ pokemon.name }
                    width="100%"
                    height={ 200 }
                  />
                </Card.Body>
            </Card>
          </Grid>

          <Grid xs={ 12 } sm={ 8 } >
            <Card>
              <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text h1 transform='capitalize'>{ pokemon.name }</Text>

                <Button color="gradient" bordered={ !isInFavourites} onClick={toggleFavourite}>
                  { isInFavourites ? 'En Favoritos' : 'Guardar en favoritos'}
                </Button>
              </Card.Header>

              <Card.Body>
                    <Text size={30}>Sprites:</Text>

                    <Container direction='row' display='flex' gap={ 0 }>
                        <Image 
                          src={ pokemon.sprites.front_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.front_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                    </Container>
                </Card.Body>  
            </Card>
          </Grid>
        </Grid.Container>
    </Layout>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${ index + 1}`);

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const { id } = params as { id: string};

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
};

export default PokemonPage;