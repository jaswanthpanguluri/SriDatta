import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { CurdService } from 'src/app/services/curd.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  sessionId: any;
  userForm: any;
  orderlogin: boolean = false;
  platinumlogin: boolean = false;
  reviewlogin: boolean = false;
  submitted = false;
  errorMsg: any;
  errorMsgstatus: boolean = false;
  constructor(private titleService: Title, private meta: Meta, private renderer: Renderer2, private route: ActivatedRoute, private toastr: ToastrService, private fb: FormBuilder, private _crud: CurdService, private cookieService: CookieService, private router: Router) {

    this.titleService.setTitle("SriDutta's - Sign in or Sign up");
    this.meta.updateTag({ name: 'description', content: "Birthday Jewellers to Hyderabad,midnight Jeweller delivery in hyderabad, Jewellers to vizag,Designer Jewellers to Hyderabad,Birthday Jewellers to India same day delivery,diamonds to Hyderabad, Sweets to Hyderabad, platinum to Hyderabad,Jewellers to Delhi,Jewellers to Bangalore, Jewellers to Chennai." });
    this.meta.updateTag({ name: 'keywords', content: "platinum to Hyderabad, platinum to Vizag, Jewellers to Hyderabad, Silvers to Hyderabad, diamonds to Hyderabad,  diamonds to Vizag, Jewellers to Vizag, Sweets to Hyderabad.." });
    this.meta.updateTag({ name: 'classification', content: "platinum to Hyderabad, diamonds, diamonds to Hyderabad,Send diamonds to Hyderabad, platinum, platinum to Hyderabad, Send platinum to Hyderabad, diamonds delivery in Hyderabad, platinum delivery in Hyderabad,to send platinum to india,Diamond Bouquet in Hyderabad, Online Florists, Online Florists in Hyderabad, Hyderabad Online Florists, Jewellers, Jeweller , Jewellers to Hyderabad, Sweets, Sweets to Hyderabad, Silvers,Silvers to Hyderabad, Watches, Watches to Hyderabad, Leather Bags to Hyderabad, Leather Items to Hyderabad." });



    this.sessionId = this.cookieService.get('sessionID');
    this.userForm = this.fb.group({
      usrname: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required]],

    });
  }
  ngOnInit() {


    const queryParams = this.route.snapshot.queryParams;
    if (queryParams['arg'] == 'ck') {
      this.orderlogin = true;
    }
    else if (queryParams['arg'] == 're') {
      this.reviewlogin = true;
    }
    else if (queryParams['arg'] == 'cg') {
      this.platinumlogin = true;
    } else {
      this.orderlogin = false;
      this.platinumlogin = false;
      this.reviewlogin = false;
    }

  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {

      this.login();
    }

  }
  login() {
    this.addLoader();
    let data = {

      "customerEmail": this.userForm.get('usrname').value,
      "password": this.userForm.get('pwd').value,
      "sessionId": this.sessionId


    }

    this._crud.login(data).subscribe(res => {
      this.removeLoader();
      if (res.isEroor) {
        this.errorMsgstatus = true;
        this.errorMsg = res.errorMessage;
        // setTimeout(() => {
        //   this.errorMsgstatus=false;
        // }, 4000);
        this.toastr.error(res.errorMessage);
      }
      else {
        //  this.toastr.success(res.successMessage);
        localStorage.setItem('email', this.userForm.get('usrname').value)
        localStorage.setItem('customerId', res.customerId);
        localStorage.setItem('custName', res.customerName);
        if (this.orderlogin) {
          this.router.navigateByUrl('/checkout')
        }
        else if (this.reviewlogin) {
          this.router.navigateByUrl('/myaccount/orders')
        }
        else if (this.platinumlogin) {
          this.router.navigateByUrl('/customplatinum')
        }
        else {
          this.router.navigateByUrl('/')
        }
      }
    });
  }

  addLoader() {
    this.renderer.addClass(document.body, 'bodyloader');
  }
  removeLoader() {
    this.renderer.removeClass(document.body, 'bodyloader');
  }

  gotosignup() {
    if (this.orderlogin) {
      this.router.navigateByUrl('/signup?arg=ck')
    }
    else if (this.platinumlogin) {
      this.router.navigateByUrl('/signup?arg=cg')
    }
    else {

      this.router.navigateByUrl('/signup')
    }
  }


  onInputChange() {
    this.errorMsgstatus = false
    // this.maxLength = 40 - this.textAreaInput.length;

  }

}

