import {Layout, Text} from '@ui-kitten/components';
import {useAuthStore} from '../../store/auth/useAuthStore';
import {useQuery} from '@tanstack/react-query';
import {getProductsByPage} from '../../../actions/products/get-products-by-page';

export const HomeScreen = () => {
  const {logout} = useAuthStore();

  const {isLoading, data: products = []} = useQuery({
    queryKey: ['producrs', 'infinite'],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductsByPage(0),
  });

  return (
    <Layout>
      <Text>{JSON.stringify(products, null, 2)}</Text>
    </Layout>
  );
};
