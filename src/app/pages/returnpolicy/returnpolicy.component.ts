import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-returnpolicy',
  templateUrl: './returnpolicy.component.html',
  styleUrls: ['./returnpolicy.component.scss']
})
export class ReturnpolicyComponent {
  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta -  ReturnPolicy');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - ReturnPolicy' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - ReturnPolicy' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - ReturnPolicy' });
  
  }
}
