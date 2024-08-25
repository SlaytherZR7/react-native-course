import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';

export const Tab2Screen = () => {
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <Text>TabScreen</Text>
    </View>
  );
};
