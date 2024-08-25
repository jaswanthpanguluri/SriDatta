import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lifetime',
  templateUrl: './lifetime-exchange.component.html',
  styleUrls: ['./lifetime-exchange.component.scss']
})
export class LifetimeComponent {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Sri Datta - Lifetime Exchange & Buyback');
    this.meta.updateTag({ name: 'description', content: 'Sri Datta - Lifetime Exchange & Buyback' });
    this.meta.updateTag({ name: 'keywords', content: 'Sri Datta - Lifetime Exchange & Buyback' });
    this.meta.updateTag({ name: 'classification', content: 'Sri Datta - Lifetime Exchange & Buyback' });

  }
}
