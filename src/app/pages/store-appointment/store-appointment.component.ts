import { Component, Renderer2 } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { CurdService } from 'src/app/services/curd.service';

@Component({
  selector: 'app-store-appointment',
  templateUrl: './store-appointment.component.html',
  styleUrls: ['./store-appointment.component.scss']
})
export class StoreAppointmentComponent {
  dynamicForm: any;
  form!: FormGroup;
  maxAddressLength: any = 100;
  submitted: boolean = false;
  constructor(
    private renderer: Renderer2,
    private titleService: Title,
    private toastr: ToastrService,
    private meta: Meta, private title: Title,
    private _crud: CurdService, private route: ActivatedRoute, private fb: FormBuilder, private cookieService: CookieService, private router: Router) {


    this.titleService.setTitle('Jewellers, Florist Shop Store Appointment Business Opportunities | Sri Dutta');
    this.meta.updateTag({ name: 'description', content: 'Sri Datta offer Jewellers, florist, combos, confectionery and gift shop Store Appointment Business opportunities in India - Inquire for low-cost.' });
    this.meta.updateTag({ name: 'keywords', content: 'Sri Datta-CouponPartnersJewellers, florist, combos, platinum, confectionery' });
    this.meta.updateTag({ name: 'classification', content: 'Sri Datta offer Jewellers, florist, combos, confectionery and gift shop Store Appointment Business opportunities in India - Inquire for low-cost.' });



    this.form = this.fb.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      //lastname: ['', Validators.required],
      //age: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      emailId: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.maxLength(this.maxAddressLength)]],
      message: ['', Validators.required],
      storeDate: ['', Validators.required],
      appointmentDate: [''],
    });
  }


  updateCharacterCount() {
    const addressControl = this.form.get('address');
    const currentLength = addressControl?.value ? addressControl.value.length : 0;
    return currentLength;
  }

  addLoader() {
    this.renderer.addClass(document.body, 'bodyloader');
  }
  removeLoader() {
    this.renderer.removeClass(document.body, 'bodyloader');
  }
  convertToISO(dateString) {
    // Split the input date string into day, month, and year
    const [day, month, year] = dateString.split('-');

    // Create a new Date object using the extracted values
    const date = day + '-' + month + '-' + year + 'T07:40:06.895Z';

    // Convert the Date object to ISO string
    return date;
  }

  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.addLoader();

      let obj = {
        // "UserID": this.userObj.UserID,
        // "pincode":  this.form.get('pincode')?.value
        "appointmentDetails":
        {
          "name": this.form.get('name')?.value,
          // "lastname": this.form.get('lastname')?.value,
          //"age": this.form.get('age')?.value,
          "mobileNumber": this.form.get('mobileNumber')?.value.toString(),
          "emailId": this.form.get('emailId')?.value,
          "address": this.form.get('address')?.value,
          "message": this.form.get('message')?.value,
          "appointmentDate": this.convertToISO(this.form.controls.storeDate.value)
        }


      }

      this._crud.poststoreAppointment(obj).subscribe(res => {
        this.removeLoader();
        if (res.isEroor) {

          this.toastr.error(res.errorMessage);
        }
        else {
          this.submitted = false;
          this.toastr.success(res.successMessage);
          this.form.reset();
        }

      })
    }
  }

}
