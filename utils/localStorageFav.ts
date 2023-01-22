

const toggleFavourites = ( id: number) => {

    let favourites: Number[] = JSON.parse( localStorage.getItem('favourites') || '[]');

    if( favourites.includes(id) ) {
        favourites = favourites.filter((pokemonId) => pokemonId !== id);
    } else {
        favourites.push(id);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
}

const existsInFavourites = (id: number ): boolean => {

    const favourites: number[] = JSON.parse( localStorage.getItem('favourites') || '[]');

    return favourites.includes(id);
}

const getPokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favourites') || '[]');
}

const pokemonFunctions = {
    toggleFavourites,
    existsInFavourites,
    getPokemons
};

export default pokemonFunctions;