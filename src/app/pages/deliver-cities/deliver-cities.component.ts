import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-deliver-cities',
  templateUrl: './deliver-cities.component.html',
  styleUrls: ['./deliver-cities.component.scss']
})
export class DeliverCitiesComponent {


  constructor(private titleService:Title, private meta:Meta)
  {
    this.titleService.setTitle('Sri Datta - Delivery Cities');
    this.meta.updateTag({ name: 'description',  content: 'Sri Datta - Delivery Cities' });
    this.meta.updateTag({ name: 'keywords',  content: 'Sri Datta - Delivery Cities' });
    this.meta.updateTag({ name: 'classification',  content: 'Sri Datta - Delivery Cities' });
  
  }

  deliveryCities=[
    'Agra', 
    'Ahmedabad', 
    'Aligarh',
    'allahabad', 
    'amalapuram', 
    'amravati',
    'amritsar', 
    'anakapally', 
    'auranagabad',
    'bangalore', 
    'bhimavaram', 
    'bhopal',
    'bhubaneshwar', 
    'Bokaro Steel City', 
    'calicut',
    'chandigarh', 
    'chennai', 
    'cochin',
    'cuttack', 
    'dehradun', 
    'delhi',
    'Deoghar', 
    'Dhanbad', 
    'eluru',
    'faridabad', 
    'gandhinagar', 
    'ghaziabad',
    'Giridih', 
    'guntur', 
    'gurgaon',
    'guwahati', 
    'hanumakonda', 
    'huzurnagar',
    'hyderabad', 
    'indore', 
    'jaipur',
    'jalandhar', 
    'jamshedpur', 
    'kakinada',
    'kanpur', 
    'karimnagar',
    'khammam', 
    'kodada', 
    'kolkata',
    'kothagudem', 
    'lucknow', 
    'ludhiana',
    'machilipatnam', 
    'madurai', 
    'mangalore',
    'meerut', 
    'mohali', 
    'mumbai',
    'nagpur', 
    'nalgonda', 
    'narsapuram',
    'nasik', 
    'noida', 
    'palakollu',
    'patiala', 
    'pondicherry', 
    'pune',
    'rajahmundary', 
    'rajkot', 
    'ranchi',
    'srikakulam', 
    'surat',
    'suryapet', 
    'tanuku', 
    'thane',
    'thiruvananthapuram', 
    'udaipur', 
    'vadodara',
    'varanasi',
    'vijayawada', 
    'vizag', 
    'warangal',

  ]
}
