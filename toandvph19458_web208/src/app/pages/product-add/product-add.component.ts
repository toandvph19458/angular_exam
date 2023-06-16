import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  formAdd= this.fb.group({
    name: ["",[Validators.required,Validators.minLength(6)]],
    price:[0,[Validators.required]]
  })
  constructor(private productService:ProductServiceService , private fb:FormBuilder,private Router:Router){
    
  }
  onHandleSubmit(){
    console.log(this.formAdd);
    
    if(this.formAdd.invalid){
      return
    }
    this.productService.add(this.formAdd.value).subscribe(()=>{
      this.Router.navigate(["admin/manager"])
    })
  }
}
