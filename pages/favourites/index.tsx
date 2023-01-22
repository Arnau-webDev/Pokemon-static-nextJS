import { useState, useEffect } from 'react';

import { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { NoFavourites } from '../../components/ui';
import { localFavourites } from '../../utils'
import { FavouritePokemons } from '@/components/pokemon';

const FavouritesPage: NextPage = () => {

  const [ favouritePokemons, setFavouritePokemons ] = useState<number[]>();

  useEffect(() => {
    setFavouritePokemons(localFavourites.getPokemons());
  }, [])

  return (
    <Layout title='Pokémons - Favoritos'>
      {favouritePokemons?.length === 0
        ? ( <NoFavourites /> )
        : ( <FavouritePokemons favouritePokemons={favouritePokemons} /> )
      }
    </Layout>
  )
}

export default FavouritesPage;