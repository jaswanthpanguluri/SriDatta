import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta - OurStores');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - OurStores' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - OurStores' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - OurStores' });
  
  }
}
