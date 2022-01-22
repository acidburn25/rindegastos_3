import { Test, TestingModule } from '@nestjs/testing';
import { ProductsconcatController } from './productsconcat.controller';

describe('ProductsconcatController', () => {
  let controller: ProductsconcatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsconcatController],
    }).compile();

    controller = module.get<ProductsconcatController>(ProductsconcatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
