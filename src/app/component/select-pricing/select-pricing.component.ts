import { Component, OnInit, Input } from '@angular/core';
import { Pricing } from 'src/app/classes/pricing';
import { Sort } from '@angular/material/sort';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-select-pricing',
  templateUrl: './select-pricing.component.html',
  styleUrls: ['./select-pricing.component.css'],
  animations: [
    trigger('rotateInDownLeft', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class SelectPricingComponent {
  fadeIn: any;
  @Input() pricing: Array<Pricing>;
  constructor() { }

  sortData(sort: Sort) {
    const data = this.pricing.slice();
    if (!sort.active || sort.direction === '') {
      this.pricing = data;
      return;
    }

    this.pricing = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'Saving': return compare(a.Saving, b.Saving, isAsc);
        case 'Residuals': return compare(a.Residuals, b.Residuals, isAsc);
        case 'Rate': return compare(a.Rate, b.Rate, isAsc);
        default: return 0;
      }
    });
  }

  editRow(row): void {

  }


}
function compare(a: number | String, b: number | String, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}