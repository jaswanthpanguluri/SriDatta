import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
constructor(private titleService:Title, private meta:Meta)
{
  this.titleService.setTitle('Sri Datta - About us');
  this.meta.updateTag({ name: 'description',  content: 'Sri Datta - About us' });
  this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - About us' });
  this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - About us' });

}
}
