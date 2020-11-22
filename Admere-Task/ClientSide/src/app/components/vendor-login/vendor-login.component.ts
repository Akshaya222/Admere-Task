import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {VendorService} from '../../services/vendor.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  LoginForm:FormGroup;
  successMessage="";

  constructor(private vendorService:VendorService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
    this.LoginForm=new FormGroup({
      mobile: new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    });
  }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.LoginForm.get(controlName).invalid && this.LoginForm.get(controlName).touched;
  }

  Login(){
    if(this.LoginForm.valid){
      console.log(this.LoginForm.value);
     this.vendorService.login(this.LoginForm.value).subscribe( data=>this.successMessage="Login Successfull",
      error=>this.successMessage="Error")
      this.router.navigate(['/vendor/list'],{relativeTo:this.activatedRoute});
    }
  }
  movetoregister(){
    this.router.navigate(['/vendor/register'],{relativeTo:this.activatedRoute});
  }


}
