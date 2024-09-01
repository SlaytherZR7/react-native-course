import {ScrollView, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/Navigation';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {useMovie} from '../../hooks/useMovie';
import {MovieDetails} from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoading, movie, cast} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
      {/* Details */}
      <MovieDetails
        rating={movie!.rating}
        genres={movie!.genres}
        description={movie!.description}
        budget={movie!.budget}
        cast={cast!}
      />
    </ScrollView>
  );
};
