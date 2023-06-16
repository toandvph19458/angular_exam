import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  formAdd= this.fb.group({
    name:["",[Validators.required,Validators.minLength(6)]],
    price:[0,[Validators.required]]
  })
  id:any=0
  constructor(private fb:FormBuilder, private productService:ProductsService,private router:Router, private route:ActivatedRoute){
    this.route.paramMap.subscribe((parma)=>{
      this.id=parma.get("id")
      this.productService.getOne(this.id).subscribe((data)=>this.formAdd.patchValue(data))
    })
  }
  onHandleSubmit(){
    if(this.formAdd.invalid){
      return
    }
    const newdata = {
      id:this.id,
      ...this.formAdd.value
    }
    this.productService.update(newdata).subscribe(()=>{
      this.router.navigate(["admin/manager"])
    })
  }
}
