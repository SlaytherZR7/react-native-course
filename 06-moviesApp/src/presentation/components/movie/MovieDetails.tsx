import {Text, View} from 'react-native';
import {Formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {CastActor} from '../cast/CastActor';

interface Props {
  rating: number;
  genres: string[];
  description: string;
  budget: number;
  cast: Cast[];
}

export const MovieDetails = ({
  rating,
  genres,
  description,
  budget,
  cast,
}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>{rating}</Text>
          <Text style={{color: 'black', marginLeft: 5}}>
            {' '}
            {genres.join(', ')}
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>{description}</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Presupuesto
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          {Formatter.currency(budget)}
        </Text>
        {/* Casting */}
        <View style={{marginTop: 10, marginBottom: 50}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 23,
              marginVertical: 10,
            }}>
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastActor actor={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};
