import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from 'src/adapter/dto/product.dto';
import type { ProductRepositoryType } from 'src/application/repository/product';
import { Product } from 'src/domain/product.entity';

@Injectable()
export class ProductRepository implements ProductRepositoryType {
  constructor(@Inject('DATABASE_CLIENT') public client: PrismaClient) {}

  async get() {
    const products = await this.client.product.findMany();

    return products.map((product) =>
      Product.new({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
      }),
    );
  }

  async create(createProductDto: CreateProductDto) {
    return await this.client.product.create({
      data: createProductDto,
    });
  }
}
