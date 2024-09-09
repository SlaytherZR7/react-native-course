import {useRef} from 'react';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  useTheme,
} from '@ui-kitten/components';
import {MainLayout} from '../../layouts/MainLayout';
import {useQuery} from '@tanstack/react-query';
import {getProductById} from '../../../actions/products/get-product-by-id';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import {FadeInImage} from '../../components/ui/FadeInImage';
import {
  Gender,
  Size,
} from '../../../infrastructure/interfaces/teslo-products.response';
import {MyIcon} from '../../components/ui/MyIcon';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];
const gender: Gender[] = [Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex];

interface Props extends StackScreenProps<RootStackParam, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const theme = useTheme();

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
        {/* Precio e inventario */}
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
        {/* Selectores */}
        <ButtonGroup
          style={{margin: 2, marginTop: 30, marginHorizontal: 15}}
          size="small"
          appearance="outline">
          {sizes.map(size => (
            <Button
              key={size}
              style={{
                flex: 1,
                backgroundColor: true ? theme['color-primary-200'] : undefined,
              }}>
              {size}
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup
          style={{margin: 2, marginTop: 30, marginHorizontal: 15}}
          size="small"
          appearance="outline">
          {gender.map(gender => (
            <Button
              key={gender}
              style={{
                flex: 1,
                backgroundColor: true ? theme['color-primary-200'] : undefined,
              }}>
              {gender}
            </Button>
          ))}
        </ButtonGroup>
        {/* Botón de guardar */}
        <Button
          accessoryLeft={<MyIcon name="save-outline" white />}
          style={{margin: 15}}
          onPress={() => console.log('Guardar')}>
          Guardar
        </Button>
        <Layout style={{height: 200}} />
      </ScrollView>
    </MainLayout>
  );
};
