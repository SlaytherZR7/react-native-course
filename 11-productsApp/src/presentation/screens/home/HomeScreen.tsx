import {useInfiniteQuery} from '@tanstack/react-query';
import {getProductsByPage} from '../../../actions/products/get-products-by-page';
import {MainLayout} from '../../layouts/MainLayout';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {ProductList} from '../../components/products/ProductList';
import {FAB} from '../../components/ui/FAB';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParam} from '../../navigation/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  // const {isLoading, data: products = []} = useQuery({
  //   queryKey: ['producrs', 'infinite'],
  //   staleTime: 1000 * 60 * 60,
  //   queryFn: () => getProductsByPage(0),
  // });

  const {isLoading, data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    queryFn: async params => {
      const products = await getProductsByPage(params.pageParam);
      return products;
    },
    getNextPageParam: (_, allPages) => allPages.length,
  });
  return (
    <>
      <MainLayout
        title="TesloShop - Products"
        subtitle="Aplicación administrativa">
        {isLoading ? (
          <FullScreenLoader />
        ) : (
          <ProductList
            products={data?.pages.flat() ?? []}
            fetchNextPage={fetchNextPage}
          />
        )}
      </MainLayout>
      <FAB
        iconName="plus-outline"
        onPress={() => navigation.navigate('ProductScreen', {productId: 'new'})}
        style={{position: 'absolute', bottom: 30, right: 20}}
      />
    </>
  );
};
