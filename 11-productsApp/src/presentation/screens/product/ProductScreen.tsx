import {useRef} from 'react';
import {Text} from '@ui-kitten/components';
import {MainLayout} from '../../layouts/MainLayout';
import {useQuery} from '@tanstack/react-query';
import {getProductById} from '../../../actions/products/get-product-by-id';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParam, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const productIdRef = useRef(route.params.productId);

  const {data: product, isLoading} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  if (!product || isLoading) {
    return (
      <MainLayout title="Loading...">
        <FullScreenLoader />
      </MainLayout>
    );
  }

  return (
    <MainLayout title={product.title} subtitle={`Precio: ${product.price}`}>
      <Text></Text>
    </MainLayout>
  );
};
