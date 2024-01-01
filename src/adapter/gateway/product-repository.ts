import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from 'src/adapter/dto/product.dto';
import type { ProductRepositoryType } from 'src/application/repository/product';

@Injectable()
export class ProductRepository implements ProductRepositoryType {
  constructor(@Inject('DATABASE_CLIENT') public client: PrismaClient) {}

  async create(createProductDto: CreateProductDto) {
    return await this.client.product.create({
      data: createProductDto,
    });
  }
}
