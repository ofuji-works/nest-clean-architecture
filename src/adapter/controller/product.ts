import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/adapter/dto/product.dto';
import { ProductRepository } from 'src/adapter/gateway/product-repository';
import { CreateProductUseCase } from 'src/application/usecase/create-product';

@Controller()
export class ProductController {
  constructor(private readonly repository: ProductRepository) {}

  @Post('products')
  async create(@Body() createProductDto: CreateProductDto) {
    const usecase = CreateProductUseCase.new(this.repository);

    usecase.execute({
      name: createProductDto.name,
      price: createProductDto.price,
    });
  }
}
