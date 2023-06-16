import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  formAdd= this.fb.group({
    name:["",[Validators.required,Validators.minLength(6)]],
    price:[0,[Validators.required]]
  })
  constructor(private fb:FormBuilder, private productService:ProductsService,private router:Router){}
  onHandleSubmit(){
    if(this.formAdd.invalid){
      return
    }
    this.productService.add(this.formAdd.value).subscribe(()=>{
      this.router.navigate(["admin/manager"])
    })
  }
}
