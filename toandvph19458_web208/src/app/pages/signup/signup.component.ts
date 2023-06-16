import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formAdd= this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required]]
  })
  constructor(private fb:FormBuilder, private userService:UsersService,private router:Router){}
  onHandleSubmit(){
    console.log(this.formAdd.value);
    if(this.formAdd.invalid){
      return
    }
    this.userService.signup(this.formAdd.value).subscribe(()=>{
      this.router.navigate(["login"])
    })
  }
}
