import { Product } from 'src/domain/product.entity';

export type CreateProduct = {
  name: string;
  price: number;
};

export type ProductRepositoryType = {
  get: () => Promise<Product[]>;
  create: (newProduct: CreateProduct) => Promise<unknown>;
};
