import {useQuery} from '@tanstack/react-query';
import {getProductsByPage} from '../../../actions/products/get-products-by-page';
import {MainLayout} from '../../layouts/MainLayout';
import {Text} from '@ui-kitten/components';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {ProductList} from '../../components/products/ProductList';

export const HomeScreen = () => {
  const {isLoading, data: products = []} = useQuery({
    queryKey: ['producrs', 'infinite'],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductsByPage(0),
  });

  return (
    <MainLayout
      title="TesloShop - Products"
      subtitle="Aplicación administrativa">
      {isLoading ? <FullScreenLoader /> : <ProductList products={products} />}
    </MainLayout>
  );
};
