import { Module } from '@nestjs/common';
import { ProductController } from 'src/adapter/controller/product';
import { ProductRepository } from 'src/adapter/gateway/product-repository';
import { PrismaService } from 'src/infrastructure/database/prisma.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductRepository,
    {
      provide: 'DATABASE_CLIENT',
      useClass: PrismaService,
    },
  ],
})
export class ProductModule {}
