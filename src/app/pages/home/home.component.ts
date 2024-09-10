import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CurdService } from 'src/app/services/curd.service';
import { OwlOptions, BreakpointOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners: any;
  iconicBanners: any;
  smallBanners: any;
  productSecions: any = [];
  city: any;
  countryname: any;
  currency: any;
  showLines: number = 3;
  promotionBanner: any;
  shopByGender: any;
  customOptions: OwlOptions = {
    nav: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    margin: 15,
    navSpeed: 700,
    //navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
  productSecions1: any = [];
  currencyClass: any;
  stock: any;
  isNewArriaval: any;
  isEggless: any;
  tagClass: any;
  tagMsg: any;
  showMore() {
    this.showLines += 3; // Increase by desired number of lines
  }
  constructor(private _crud: CurdService,
    private route: Router,
    private renderer: Renderer2,
    private meta: Meta,
    private titleService: Title) {
    this.getProducts();
  }

  addLoader() {
    this.renderer.addClass(document.body, 'bodyloader');
  }
  removeLoader() {
    this.renderer.removeClass(document.body, 'bodyloader');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Order Jeweller Online | Send Jeweller Online to India - Sri Datta');
    this.meta.updateTag({ name: 'description', content: 'Order Jeweller online at sridutta. Send a Jeweller to India with same-day delivery from anywhere with one click.Tap to Order now! and surprise your loved ones.' });
    this.meta.updateTag({ name: 'keywords', content: 'Order Birthday Jeweller Online ,order Jeweller online ,birthday Jewellers delivered ,send Jeweller to India ,online Jeweller delivery in india ,send birthday Jeweller online' });
    this.meta.updateTag({ name: 'classification', content: 'Order Birthday Jeweller Online ,order Jeweller online ,birthday Jewellers delivered ,send Jeweller to India ,online Jeweller delivery in india ,send birthday Jeweller online' });

    this.addLoader();
    this.addCanonicalLink();

    //localStorage.setItem('currency', 'INR')
    this.city = localStorage.getItem('city')
    this.countryname = localStorage.getItem('country');
    this.currency = localStorage.getItem('currency');
    this.getBanners()
    //if (this.city) {
    // }
  }

  getBanners(): void {
    this.addLoader();
    this._crud.getBanners().subscribe(res => {
      this.removeLoader();
      this.banners = res.banners;
      this.iconicBanners = res.categoryBanners;
      this.smallBanners = res.smallBanners;
      this.promotionBanner = res.promotionBanner;
      this.shopByGender = res.shopByGender;
    }, (error) => {
      this.removeLoader()
    })
  }

  private addCanonicalLink() {

    const canonicalLink: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = 'https://www.sridutta.com';
    }
    else {
      const link: HTMLLinkElement = this.renderer.createElement('link');
      link.rel = 'canonical';

      link.href = 'https://www.sridutta.com'; // Replace with your canonical URL
      this.renderer.appendChild(document.head, link);
    }
  }

  getProducts(): void {
    this.addLoader();
    const data = {
      //cityname: this.city,
      //country: this.countryname,
      //currencySelected: this.currency
    }
    this._crud.getProducts(data).subscribe(res => {
      if (!!res) {
        this.removeLoader();
        this.productSecions = res
      }
    }, (error) => {
      this.removeLoader()
    })
  }

  gotoroute(t: any, pname: any) {

    if (t == 'online-delivery') {
      this.route.navigateByUrl('/' + pname + '/' + t)
    } else if (t == 'order') {
      this.route.navigateByUrl('/' + t + '/' + pname)
    } else if (t == 'OCC') {
      t = 'send';
      this.route.navigateByUrl('/' + t + '/' + pname)
    }


  }
  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImageUrl;
  }
  defaultImageUrl: string = "/assets/images/default.jpeg";
  advbanner01: string = "../assets/images/advbanner01.jpg";
  advbanner02: string = "../assets/images/advbanner02.jpg";
  videoAdv: string = "../assets/images/video-adv.jpg";
  videoImgTwo: string = "../assets/images/video-img-two.jpg";
  womenJewelleryImg: string = "../assets/images/women-jewellery-img.jpg";
  menJewelleryImg: string = "../assets/images/men-jewellery-img.jpg";
  fullBannerImg: string = "../assets/images/fullbanner-footer.jpg";

  homeVideos = [
    { imageUrl: '../assets/images/videos-images/video01.jpg' },
    { imageUrl: '../assets/images/videos-images/video02.jpg' },
    { imageUrl: '../assets/images/videos-images/video03.jpg' },
    { imageUrl: '../assets/images/videos-images/video04.jpg' },
    { imageUrl: '../assets/images/videos-images/video05.jpg' },
    { imageUrl: '../assets/images/videos-images/video01.jpg' },
  ];






}
