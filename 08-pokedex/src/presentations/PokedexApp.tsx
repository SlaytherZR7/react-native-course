import 'react-native-gesture-handler';
import {StackNavigator} from './navigator/StackNavigator';
import {ThemeContextProvider} from './context/ThemeContext';

export const PokedexApp = () => {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
};
