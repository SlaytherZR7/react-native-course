import {tesloApi} from '../../config/api/tesloApi';
import {Product} from '../../domain/entities/product';
import {TesloProduct} from '../../infrastructure/interfaces/teslo-products.response';
import {ProductMapper} from '../../infrastructure/mappers/product.mapper';

export const getProductById = async (productId: string): Promise<Product> => {
  try {
    const {data} = await tesloApi.get<TesloProduct>(`/products/${productId}`);
    return ProductMapper.tesloProductToEntity(data);
  } catch (error) {
    console.log(error);
    throw new Error('Error getting product by id');
  }
};
