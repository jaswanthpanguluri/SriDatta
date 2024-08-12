import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Contact Us | SriDatta');
    this.meta.updateTag({ name: 'description', content: 'sriduttas - Careers' });
    this.meta.updateTag({ name: 'keywords', content: 'Contact Us, SriDatta Contact Us, Online platinum,Jewellers Online, diamonds,Snacks' });
    this.meta.updateTag({ name: 'classification', content: 'Sri Datta - Careers' });

  }
}
