import {tesloApi} from '../../config/api/tesloApi';
import {Gender, Product} from '../../domain/entities/product';
import {TesloProduct} from '../../infrastructure/interfaces/teslo-products.response';
import {ProductMapper} from '../../infrastructure/mappers/product.mapper';

const emptyProduct: Product = {
  id: '',
  title: '',
  price: 0,
  description: '',
  images: [],
  slug: '',
  gender: Gender.Unisex,
  sizes: [],
  stock: 0,
  tags: [],
};

export const getProductById = async (productId: string): Promise<Product> => {
  if (productId === 'new') {
    return emptyProduct;
  }

  try {
    const {data} = await tesloApi.get<TesloProduct>(`/products/${productId}`);
    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    console.log(error);
    throw new Error('Error getting product by id');
  }
};
