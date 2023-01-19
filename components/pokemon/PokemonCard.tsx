import { PokemonListItem } from '../../interfaces/pokemon-list';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface PokemonCardProps {
    pokemon: PokemonListItem
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ pokemon.id }>
        <Card hoverable clickable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
            <Card.Image 
                src={ pokemon.img }
                width="100%"
                height={ 140 }
            />
        </Card.Body>
        <Card.Footer>
            <Row justify='space-between'>
            <Text transform='capitalize'>{ pokemon.name }</Text>
            <Text>#{ pokemon.id }</Text>
            </Row>
        </Card.Footer>
        </Card>
    </Grid>
  )
}
