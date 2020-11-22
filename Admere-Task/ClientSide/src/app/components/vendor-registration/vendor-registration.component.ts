import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormGroup,FormControl,Validators} from '@angular/forms';
import {VendorService} from '../../services/vendor.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {

  RegisterForm:FormGroup;
  successMessage='';
  constructor(private vendorService:VendorService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
    this.RegisterForm=new FormGroup({
      mobile: new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      cnfpass:new FormControl(null,this.passValidator)
    });
    this.RegisterForm.controls.password.valueChanges.subscribe(
      x=>this.RegisterForm.controls.cnfpass.updateValueAndValidity()
    );
  }

  ngOnInit(): void {
  }
  isValid(controlName) {
    return this.RegisterForm.get(controlName).invalid && this.RegisterForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  Register(){
    console.log("hiii");
    console.log(this.RegisterForm.value);
    console.log("hello")
    this.vendorService.submitRegistration(this.RegisterForm.value)
    .subscribe(
      data=>this.successMessage="Registration Successfull",
      error=>this.successMessage="Error"
    )
    this.router.navigate(['/vendor/login'],{relativeTo:this.activatedRoute});
  }

  movetologin(){
    this.router.navigate(['/vendor/login'],{relativeTo:this.activatedRoute});
  }
}

