import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
