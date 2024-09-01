import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '1f66248e3726b43f4435e848a66dd3d5',
    api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});
