import {
  CreateProduct,
  ProductRepositoryType,
} from 'src/application/repository/product';

export class CreateProductUseCase {
  private constructor(private readonly repository: ProductRepositoryType) {}

  static new(repository: ProductRepositoryType) {
    return new CreateProductUseCase(repository);
  }

  async execute(createProduct: CreateProduct) {
    return await this.repository.create(createProduct);
  }
}
