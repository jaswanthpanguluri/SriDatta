import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CartModule } from './cart/cart.module';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
// import { ProductsComponent } from './pages/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CareersComponent } from './pages/careers/careers.component';


import { CustomerServicesComponent } from './pages/customer-services/customer-services.component';
import { HelpComponent } from './pages/help/help.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
//import { MothersDayJewellersComponent } from './pages/occasions/mothers-day-Jewellers/mothers-day-Jewellers.component';
import { DeliverCitiesComponent } from './pages/deliver-cities/deliver-cities.component';
import { ReturnpolicyComponent } from './pages/returnpolicy/returnpolicy.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { AboutAndMediaComponent } from './pages/about-and-media/about-and-media.component';

// import { NgxImageZoomModule } from 'ngx-image-zoom';


// import { NoproductsFoundComponent } from './pages/noproducts-found/noproducts-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CareersComponent,

    CustomerServicesComponent,
    HelpComponent,
    FaqComponent,
    ShippingComponent,
    //MothersDayJewellersComponent,
    DeliverCitiesComponent,
    ReturnpolicyComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    AboutAndMediaComponent,




    //  NoproductsFoundComponent,


    // ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CartModule,
    LoginModule,
    ProfileModule
    // NgxImageZoomModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
