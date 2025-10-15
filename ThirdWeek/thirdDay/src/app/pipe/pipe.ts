import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../customPipe/currency-converter-pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,CurrencyConverterPipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {

  title:string='HelLo JonE';
  myDate:Date=new Date();
  amount:number=300;
}
