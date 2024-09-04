import {pokeApi} from '../../config/api/pokeApi';
import {Pokemon} from '../../domain/entities/pokemon';

export const getPokemons = async (): Promise<Pokemon[]> => {
  try {
    const URL = '/pokemon';
    const {data} = await pokeApi.get(URL);
    console.log(data);
    return [];
  } catch (error) {
    throw new Error('Error getting pokemons');
  }
};
