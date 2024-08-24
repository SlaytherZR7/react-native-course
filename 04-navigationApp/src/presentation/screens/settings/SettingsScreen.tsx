import {Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 20, color: 'black', marginBottom: 12}}>
        Settings Screen
      </Text>
      <PrimaryButton
        label="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <PrimaryButton
        label="Go to Home"
        onPress={() => {
          navigation.dispatch(StackActions.popToTop());
        }}
      />
    </View>
  );
};
