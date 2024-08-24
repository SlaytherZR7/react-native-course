import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{...globalStyles.container, marginTop: top}}>
      <Text style={{color: 'black', marginBottom: 12}}>ProfileScreen</Text>
      <PrimaryButton
        label="Abrir Menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
