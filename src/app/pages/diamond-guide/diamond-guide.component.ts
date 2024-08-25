import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond-guide.component.html',
  styleUrls: ['./diamond-guide.component.scss']
})
export class DiamondguideComponent {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Sri Datta - Diamond Guide');
    this.meta.updateTag({ name: 'description', content: 'Sri Datta - Diamond Guide' });
    this.meta.updateTag({ name: 'keywords', content: 'Sri Datta - Diamond Guide' });
    this.meta.updateTag({ name: 'classification', content: 'Sri Datta - Diamond Guide' });

  }
}
