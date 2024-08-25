import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`,
    });
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Pressable onPress={() => incrementBy(1)} style={styles.primaryButton}>
        <Text style={{color: 'black', textAlign: 'center'}}>Incrementar</Text>
      </Pressable>
      <Pressable onPress={() => incrementBy(-1)} style={styles.primaryButton}>
        <Text style={{color: 'black', textAlign: 'center'}}>Reducir</Text>
      </Pressable>
    </View>
  );
};
