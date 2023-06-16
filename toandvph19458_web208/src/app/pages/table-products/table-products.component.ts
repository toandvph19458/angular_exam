import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss']
})
export class TableProductsComponent {
  products:any=[]
constructor(private productService:ProductServiceService){
  this.productService.getAll().subscribe((data)=>this.products=data)
}
onRemove(id:any){
  this.productService.deleteproduct(id).subscribe(()=>this.products=this.products.filter((item:any)=>item.id!=id))
}
}
