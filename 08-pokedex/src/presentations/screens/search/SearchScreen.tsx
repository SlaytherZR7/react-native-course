import {useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {Pokemon} from '../../../domain/entities/pokemon';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {useQuery} from '@tanstack/react-query';
import {
  getPokemonNamesWithId,
  getPokemonsById,
} from '../../../actions/pokemons';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  const [term, setTerm] = useState('');

  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemon', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonsNameIdList = useMemo(() => {
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNameList.find(
        pokemon => pokemon.id === Number(term),
      );
      return pokemon ? [pokemon] : [];
    }

    if (term.length === 0) return [];

    if (term.length < 3) return [];

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(term.toLowerCase()),
    );
  }, [term]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonsNameIdList],
    queryFn: () =>
      getPokemonsById(pokemonsNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <FullScreenLoader />;

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Buscar Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />
      {isLoadingPokemons && <ActivityIndicator style={{paddingTop: 20}} />}
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id.toString()}-${index}`}
        numColumns={2}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 120}} />}
      />
    </View>
  );
};
