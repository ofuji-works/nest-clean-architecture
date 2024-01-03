import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/domain/product.entity';

export class ProductPresenter {
  @ApiProperty()
  private id: string;

  @ApiProperty()
  private name: string;

  @ApiProperty()
  private price: number;

  private constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static new(product: Readonly<Product>): ProductPresenter {
    return new ProductPresenter(product.id, product.name, product.price);
  }
}

export class GetProductsPresenter {
  @ApiProperty({ type: [ProductPresenter] })
  private products: ProductPresenter[];

  private constructor(products: ProductPresenter[]) {
    this.products = products;
  }

  static new(products: Product[]): GetProductsPresenter {
    const productPresenters = products.map((product) =>
      ProductPresenter.new(product),
    );

    return new GetProductsPresenter(productPresenters);
  }
}
