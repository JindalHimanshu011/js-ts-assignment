import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-print',
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {

  Lot: string | null = null;
  tagType: string | null = null;
  returnItem: any;
  constructor(private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit() {
    this.Lot = this.route.snapshot.paramMap.get('lot');
    this.tagType = this.route.snapshot.paramMap.get('tagType');

    const data = localStorage.getItem('item');
    if (data) {
      const parseItems = JSON.parse(data);

      const parseItem = Array.isArray(parseItems) ? parseItems : [];
      this.returnItem = parseItem.find(item => item.lotNumber == this.Lot)
    }
  }

  goBack()
  {
    this.router.navigate(['item']);
  }
}
