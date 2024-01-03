import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { CreateProductDto } from 'src/adapter/dto/product.dto';
import { ProductRepository } from 'src/adapter/gateway/product-repository';
import { CreateProductUseCase } from 'src/application/usecase/create-product';
import { GetProductUseCase } from 'src/application/usecase/get-product';
import { GetProductsPresenter } from 'src/adapter/presenter/product';

@Controller()
export class ProductController {
  constructor(private readonly repository: ProductRepository) {}

  @ApiOperation({ summary: '商品一覧取得' })
  @ApiOkResponse({ description: '取得成功時', type: GetProductsPresenter })
  @Get('products')
  async index() {
    const usecase = GetProductUseCase.new(this.repository);
    const products = await usecase.execute();

    return GetProductsPresenter.new(products);
  }

  @Post('products')
  async create(@Body() createProductDto: CreateProductDto) {
    const usecase = CreateProductUseCase.new(this.repository);

    usecase.execute({
      name: createProductDto.name,
      price: createProductDto.price,
    });
  }
}
