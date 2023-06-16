import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  formAdd:any= this.fb.group({
    name: ["",[Validators.required,Validators.minLength(6)]],
    price:[0,[Validators.required]]
  })
  id:any=0
  constructor(private productService:ProductServiceService , private fb:FormBuilder,private Router:Router,private route:ActivatedRoute){
    this.route.paramMap.subscribe((param)=>{
      this.id=param.get("id")
      this.productService.getOne(this.id).subscribe((data)=>this.formAdd.patchValue(data))
    })
  }
  onHandleSubmit(){
    console.log(this.formAdd);
    
    if(this.formAdd.invalid){
      return
    }
    const newdata:any={
      id:this.id,
      ...this.formAdd.value
    }
    this.productService.update(newdata).subscribe(()=>{
      this.Router.navigate(["admin/manager"])
    })
  }
}
