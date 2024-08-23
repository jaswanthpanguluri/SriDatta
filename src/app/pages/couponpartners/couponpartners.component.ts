import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-couponpartners',
  templateUrl: './couponpartners.component.html',
  styleUrls: ['./couponpartners.component.scss']
})
export class CouponpartnersComponent {
  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta-CouponPartners');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta-CouponPartners' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta-CouponPartners' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta-CouponPartners' });
  
  }
}
