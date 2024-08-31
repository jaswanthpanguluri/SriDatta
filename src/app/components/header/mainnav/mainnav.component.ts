import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../../../environments/environment'
import { CurdService } from 'src/app/services/curd.service';
@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent {
  @Input('categoryList') categoryList: any;
  @Input('menuList') menuList: any;
  city: any;
  environment = environment;
  constructor(private route: Router, private _crud: CurdService) {


    this.route.events.subscribe((event: any) => {

      if (event instanceof NavigationEnd) {

        this.getData();

      }


    });




  }
  ngOnInit(): void {
    this.city = localStorage.getItem('city');


  }



  getData(): void {
    this._crud.getTopHeader('').subscribe(res => {

      this.categoryList = res.categoryList;



    })
  }

  gotoroute(t: any, pname: any) {

    if (t == 'online-delivery') {
       this.route.navigateByUrl('/' + pname + '/' + t)
     }
    else if (t == 'order') {
       this.route.navigateByUrl('/' + t + '/' + pname)
     }
    


  }

}
