import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsconcatController } from './controllers/productsconcat.controller';
import { ProductsconcatService } from './services/productsconcat.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsconcatController],
  providers: [AppService, ProductsconcatService],
})
export class AppModule {}
