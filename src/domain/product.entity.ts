type ProductProperties = {
  id: string;
  name: string;
  price: number;
};

export class Product {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly price: number,
  ) {}

  static new(properties: ProductProperties): Product {
    return new Product(properties.id, properties.name, properties.price);
  }
}
