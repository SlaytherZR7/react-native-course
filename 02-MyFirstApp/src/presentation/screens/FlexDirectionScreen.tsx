import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#4541ae',
  },
  box3: {
    backgroundColor: '#25245c',
  },
});
