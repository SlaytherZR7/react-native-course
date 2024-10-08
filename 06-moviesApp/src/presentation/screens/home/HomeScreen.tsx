import {View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
    topRatedNextPage,
    upcomingNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Carrusel Principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Peliculas Populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* Peliculas Top Rated */}
        <HorizontalCarousel
          movies={topRated}
          title="Mejor puntuadas"
          loadNextPage={topRatedNextPage}
        />
        {/* Peliculas proximamente */}
        <HorizontalCarousel
          movies={upcoming}
          title="Próximamente"
          loadNextPage={upcomingNextPage}
        />
      </View>
    </ScrollView>
  );
};
