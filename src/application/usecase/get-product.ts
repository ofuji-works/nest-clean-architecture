import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/adapter/gateway/product-repository';

@Injectable()
export class GetProductUseCase {
  private constructor(public readonly repository: ProductRepository) {}

  static new(repository: ProductRepository): GetProductUseCase {
    return new GetProductUseCase(repository);
  }

  execute() {
    return this.repository.get();
  }
}
