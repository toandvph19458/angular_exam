import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  products:any=[]
constructor(private productService:ProductsService){
  this.productService.getAll().subscribe((data)=>this.products=data)
}
  onRemove(id:any){
    this.productService.deletePr(id).subscribe(()=>this.products=this.products.filter((item:any)=>item.id!=id))
  }
}
