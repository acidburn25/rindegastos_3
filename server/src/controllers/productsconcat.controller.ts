import { Controller, Get, Post, Query, Body  } from '@nestjs/common';

import { ProductsconcatService } from './../services/productsconcat.service';

@Controller('productsconcat')
export class ProductsconcatController {
    constructor(public productsconcatService: ProductsconcatService) {}

  @Get()
  getProductConcat(
    @Query('first') first: number,
    @Query('second') second: number,
  ) {
    return this.productsconcatService.getTheNumber(first, second);
  }
}