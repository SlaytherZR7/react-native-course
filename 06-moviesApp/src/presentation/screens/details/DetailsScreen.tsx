import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/Navigation';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {useMovie} from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParam, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
      {/* Details */}
    </View>
  );
};
