import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss']
})
export class PrivacypolicyComponent {

  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta -  PrivacyPolicy');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - PrivacyPolicy' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - PrivacyPolicy' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - PrivacyPolicy' });
  
  }
}
