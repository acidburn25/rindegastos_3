import { Test, TestingModule } from '@nestjs/testing';
import { ProductsconcatService } from './productsconcat.service';

describe('ProductsconcatService', () => {
  let service: ProductsconcatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsconcatService],
    }).compile();

    service = module.get<ProductsconcatService>(ProductsconcatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
