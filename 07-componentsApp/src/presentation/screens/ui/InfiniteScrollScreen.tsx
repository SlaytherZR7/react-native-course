import {useState} from 'react';
import {FlatList, Text} from 'react-native';
import {CustomView, Title} from '../../components';
import {colors} from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => i + numbers.length);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <CustomView margin>
      <Title text="Infinite Scroll" safe />
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => (
          <Text
            style={{
              color: 'white',
              height: 300,
              backgroundColor: colors.primary,
              fontSize: 50,
            }}>
            {item}
          </Text>
        )}
      />
    </CustomView>
  );
};
