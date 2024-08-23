import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta - Shipping & Deliver');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - Shipping & Deliver' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - Shipping & Deliver' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - Shipping & Deliver' });
  
  }
}
