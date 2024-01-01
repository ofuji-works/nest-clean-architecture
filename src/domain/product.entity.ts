type ProductProperties = {
  id: string;
  name: string;
  price: number;
};

export class Product {
  private constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly price: number,
  ) {}

  static new(properties: ProductProperties): Product {
    return new Product(properties.id, properties.name, properties.price);
  }
}
