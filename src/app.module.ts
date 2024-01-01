import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaService } from 'src/infrastructure/database/prisma.service';

import { ProductModule } from 'src/infrastructure/nest-modules/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'DATABASE_CLIENT',
      useClass: PrismaService,
    },
  ],
})
export class AppModule {}
