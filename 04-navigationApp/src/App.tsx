import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
// import {StackNavigator} from './presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
