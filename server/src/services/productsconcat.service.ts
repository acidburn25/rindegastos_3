import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsconcatService {
  getTheNumber(first: number, second: number) {
    let valueResult: number;
    let stringResult: string = '';
    for (let i = 1; i <= second; i++) {
      //Pendiente validacion de numeros mínimos
      valueResult = first * i;
      stringResult = stringResult.concat(valueResult.toString());
      if (stringResult.length >= 9 && i < second) {
        stringResult = stringResult.substring(0, 9);
        break;
      } else {
        stringResult = stringResult;
      }
    }
    return parseInt(stringResult)
  }
}
