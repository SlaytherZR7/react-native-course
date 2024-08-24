import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black', marginBottom: 12, fontSize: 20}}>
        ProductScreen
      </Text>
      <Text style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
