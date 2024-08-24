import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>
        Productos
      </Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => {
              navigation.navigate('Product' as never);
            }}
            label={item.name}
          />
        )}
      />
      <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>
        Ajustes
      </Text>
      <PrimaryButton
        label="Ajustes"
        onPress={() => {
          navigation.navigate('Settings' as never);
        }}
      />
    </View>
  );
};
