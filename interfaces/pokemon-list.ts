export interface PokemonListResponse {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonListItem[];
}

export interface PokemonListItem {
    id: number,
    name: string;
    url: string;
    img: string
}
