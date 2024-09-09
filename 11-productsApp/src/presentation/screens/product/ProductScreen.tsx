import {useRef} from 'react';
import {Input, Layout} from '@ui-kitten/components';
import {MainLayout} from '../../layouts/MainLayout';
import {useQuery} from '@tanstack/react-query';
import {getProductById} from '../../../actions/products/get-product-by-id';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import {FadeInImage} from '../../components/ui/FadeInImage';

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
      <ScrollView style={{flex: 1}}>
        <Layout>
          <FlatList
            data={product.images}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <FadeInImage
                uri={item}
                style={{width: 300, height: 300, marginHorizontal: 7}}
              />
            )}
          />
        </Layout>
        {/* Formulario */}
        <Layout style={{marginHorizontal: 20}}>
          <Input
            label="Titulo"
            value={product.title}
            style={{marginVertical: 5}}
          />
          <Input
            label="Slug"
            value={product.slug}
            style={{marginVertical: 5}}
          />
          <Input
            label="Descripción"
            value={product.description}
            multiline
            numberOfLines={5}
            style={{marginVertical: 5}}
          />
        </Layout>
        <Layout
          style={{
            marginHorizontal: 15,
            marginVertical: 5,
            flexDirection: 'row',
            gap: 10,
          }}>
          <Input
            label="Precio"
            value={product.price.toString()}
            style={{flex: 1}}
          />
          <Input
            label="Inventario"
            value={product.stock.toString()}
            style={{flex: 1}}
          />
        </Layout>
        <Layout style={{height: 200}} />
      </ScrollView>
    </MainLayout>
  );
};
