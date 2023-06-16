import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { TableComponent } from './pages/table/table.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';



const routes: Routes = [
  {path:"admin",component:LayoutAdminComponent,children:[
    {path:"manager",component:TableComponent},
    {path:"add",component:AddComponent},
    {path:"manager/:id",component:UpdateComponent}
  ]},
  {path:"",component:LayoutClientComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
   
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
