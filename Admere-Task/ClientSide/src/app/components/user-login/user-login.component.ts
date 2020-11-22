import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  LoginForm:FormGroup;
  successMessage="";

  constructor(private userService:UserService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
    this.LoginForm=new FormGroup({
      username: new FormControl(null,Validators.required),
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
      this.userService.login(this.LoginForm.value).subscribe( data=>this.successMessage="Login Successfull",
      error=>this.successMessage="Error")
      this.router.navigate(['/vendor/list'],{relativeTo:this.activatedRoute});
    }
  }
  movetoregister(){
    this.router.navigate(['/user/register'],{relativeTo:this.activatedRoute});
  }

}
