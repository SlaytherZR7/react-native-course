import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Go to Products"
        onPress={() => navigation.navigate('Products' as never)}
      />
      <PrimaryButton
        label="Go to Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
