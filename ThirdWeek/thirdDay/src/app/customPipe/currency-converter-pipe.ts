import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, convertType: string): unknown {
    if(convertType==='USD')
          return value*85;

    return value;


  }

}
