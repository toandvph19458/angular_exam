import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { TableProductsComponent } from './pages/table-products/table-products.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';


const routes: Routes = [
  {path:"admin",component:LayoutAdminComponent,children:[
    {path:"manager",component:TableProductsComponent},
    {path:"add",component:ProductAddComponent},
    {path:"manager/:id",component:UpdateProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
