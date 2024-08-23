import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text>Hola Mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    margin: 20,
    padding: 5,
  },
});
