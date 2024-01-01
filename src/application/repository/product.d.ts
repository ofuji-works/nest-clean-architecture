export type CreateProduct = {
  name: string;
  price: number;
};

export type ProductRepositoryType = {
  create: (newProduct: CreateProduct) => Promise<unknown>;
};
