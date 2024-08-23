import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-content',
  templateUrl: './terms-content.component.html',
  styleUrls: ['./terms-content.component.scss']
})
export class TermsContentComponent {


  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta - Terms & Conditions');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - Terms & Conditions' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - Terms & Conditions' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - Terms & Conditions' });
  
  }


  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

}
