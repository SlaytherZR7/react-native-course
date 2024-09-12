import {useRef} from 'react';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  useTheme,
} from '@ui-kitten/components';
import {MainLayout} from '../../layouts/MainLayout';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {getProductById} from '../../../actions/products/get-product-by-id';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatList, Image} from 'react-native';
import {FadeInImage} from '../../components/ui/FadeInImage';
import {
  Gender,
  Size,
} from '../../../infrastructure/interfaces/teslo-products.response';
import {MyIcon} from '../../components/ui/MyIcon';
import {Formik} from 'formik';
import {Product} from '../../../domain/entities/product';
import {updateCreateProduct} from '../../../actions/products/update-create-product';
import {CamaraAdapter} from '../../../config/adapters/camara-adapter';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];
const gender: Gender[] = [Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex];

interface Props extends StackScreenProps<RootStackParam, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const theme = useTheme();

  const productIdRef = useRef(route.params.productId);

  const queryClient = useQueryClient();

  const {data: product, isLoading} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  const mutation = useMutation({
    mutationFn: (data: Product) =>
      updateCreateProduct({...data, id: productIdRef.current}),
    onSuccess(data: Product) {
      productIdRef.current = data.id;
      queryClient.invalidateQueries({queryKey: ['products', 'infinite']});
      queryClient.invalidateQueries({queryKey: ['product', data.id]});
    },
  });

  if (!product || isLoading) {
    return (
      <MainLayout title="Loading...">
        <FullScreenLoader />
      </MainLayout>
    );
  }

  return (
    <Formik initialValues={product} onSubmit={mutation.mutate}>
      {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
        <MainLayout
          title={values.title}
          subtitle={`Precio: ${values.price}`}
          rightActionIcon="camara-outline"
          rightAction={async () => {
            // const photos = await CamaraAdapter.takePicture();
            const photos = await CamaraAdapter.getPicturesFromLibrary();
            setFieldValue('images', [...values.images, ...photos]);
          }}>
          <ScrollView style={{flex: 1}}>
            <Layout
              style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {values.images.length === 0 ? (
                <Image
                  source={require('../../../assets/no-product-image.png')}
                  style={{width: 300, height: 300}}
                />
              ) : (
                <FlatList
                  data={values.images}
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
              )}
            </Layout>
            {/* Formulario */}
            <Layout style={{marginHorizontal: 20}}>
              <Input
                label="Titulo"
                value={values.title}
                onChangeText={handleChange('title')}
                style={{marginVertical: 5}}
              />
              <Input
                label="Slug"
                value={values.slug}
                onChangeText={handleChange('slug')}
                style={{marginVertical: 5}}
              />
              <Input
                label="Descripción"
                value={values.description}
                onChangeText={handleChange('description')}
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
                keyboardType="numeric"
                label="Precio"
                value={values.price.toString()}
                onChangeText={handleChange('price')}
                style={{flex: 1}}
              />
              <Input
                keyboardType="numeric"
                label="Inventario"
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
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
                  onPress={() =>
                    setFieldValue(
                      'sizes',
                      values.sizes.includes(size)
                        ? values.sizes.filter(s => s !== size)
                        : [...values.sizes, size],
                    )
                  }
                  key={size}
                  style={{
                    flex: 1,
                    backgroundColor: values.sizes.includes(size)
                      ? theme['color-primary-200']
                      : undefined,
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
                  onPress={() => setFieldValue('gender', gender)}
                  key={gender}
                  style={{
                    flex: 1,
                    backgroundColor: values.gender.startsWith(gender)
                      ? theme['color-primary-200']
                      : undefined,
                  }}>
                  {gender}
                </Button>
              ))}
            </ButtonGroup>
            {/* Botón de guardar */}
            <Button
              accessoryLeft={<MyIcon name="save-outline" white />}
              style={{margin: 15}}
              onPress={() => handleSubmit()}
              disabled={mutation.isPending}>
              Guardar
            </Button>
            <Layout style={{height: 200}} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  );
};
