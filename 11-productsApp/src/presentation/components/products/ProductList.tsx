import {useState} from 'react';
import {RefreshControl} from 'react-native';
import {Product} from '../../../domain/entities/product';
import {Layout, List} from '@ui-kitten/components';
import {ProductCard} from './ProductCard';

interface Props {
  products: Product[];
  fetchNextPage: () => void;
}

export const ProductList = ({products, fetchNextPage}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onPullToRefresh = async () => {
    setIsRefreshing(true);
    // Sleep for 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsRefreshing(false);
  };

  return (
    <List
      data={products}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ProductCard product={item} />}
      ListFooterComponent={() => <Layout style={{height: 150}} />}
      onEndReachedThreshold={0.7}
      onEndReached={fetchNextPage}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />
      }
    />
  );
};
