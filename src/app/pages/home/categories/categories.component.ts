import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  constructor(private route: Router) {

  }
  @Input('iconicBanners') iconicBanners: any;
  ngonInit() {
  }
  categories = [
    { name: 'Rings', imageUrl: '../assets/images/categories/rings.jpg' },
    { name: 'Earrings', imageUrl: '../assets/images/categories/earrings.jpg' },
    { name: 'Pendants', imageUrl: '../assets/images/categories/pendants.jpg' },
    { name: 'Pendant Sets', imageUrl: '../assets/images/categories/pendantsets.jpg' },
    { name: 'Bracelets', imageUrl: '../assets/images/categories/bracelets.jpg' },
    { name: 'Bangles', imageUrl: '../assets/images/categories/bangles.jpg' },
    { name: 'Necklaces', imageUrl: '../assets/images/categories/necklaces.jpg' },
    { name: 'Necklace Sets', imageUrl: '../assets/images/categories/necklace-sets.jpg' },
    { name: 'Mangalasutra', imageUrl: '../assets/images/categories/mangalasutra.jpg' },
    { name: 'Chains', imageUrl: '../assets/images/categories/chains.jpg' },
    { name: 'Nosewear', imageUrl: '../assets/images/categories/nosewear.jpg' },
    { name: 'Coins', imageUrl: '../assets/images/categories/coins.jpg' },
  ];

  highlets = [
    { icon: "icon-quality-100", name: "100% Certified Jewellery" },
    { icon: "icon-hallmark", name: "BIS Hallmarked Gold Jewellery" },
    { icon: "icon-exchange-icon", name: "Lifetime Exchange" },
    { icon: "icon-buyback", name: "Lifetime Buyback" },
    { icon: "icon-return-policy", name: "7 Days Return Policy" },
    { icon: "icon-free-insurance", name: "1 Year Free Insurance" },
    { icon: "icon-product-upgrade", name: "6 Months Free Product Upgrade" },
    { icon: "icon-free-shipping", name: "Free Shipping" },
  ]
  defaultImageUrl = '/assets/images/default.jpeg'



  gotoroute(t: any, pname: any) {


    let c = localStorage.getItem('city')

    this.route.navigateByUrl('/' + t + '/' + pname);
    // if (t == 'C') {
    //   t = 'online-delivery';
    //   this.route.navigateByUrl('/' + pname + '/' + c + '/' + t)

    // } else if (t == 'SC') {
    //   t = 'order';
    //   this.route.navigateByUrl('/' + t + '/' + c + '/' + pname)
    // }
    // else if (t == 'OCC') {
    //   t = 'send';
    //   this.route.navigateByUrl('/' + t + '/' + c + '/' + pname)
    // }
    // else if (t == 'SPL') {

    //   this.route.navigateByUrl('/' + pname + '-' + c)
    // }
    // else if (t == 'FLV') {

    //   let link = pname + '-to-' + c
    //   this.route.navigateByUrl('/' + link)
    // }
    // else if (t == 'CTY') {
    //   this.route.navigateByUrl('/' + c + '/' + pname)
    // }

    // else {
    //   t = t
    // }


  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }





}
