import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss']
})
export class TermsandconditionsComponent {
  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta - Terms & Conditions');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - Terms & Conditions' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - Terms & Conditions' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - Terms & Conditions' });
  
  }
}
