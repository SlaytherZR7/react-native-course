import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import {IonIcon} from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon name="rocket-outline" size={40} />
    </View>
  );
};
