import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponentComponent} from './first-component/first-component.component'
import {CreateEmployeeComponent} from './create-employee/create-employee.component'
const routes: Routes = [
  {path:'first',component:FirstComponentComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'',redirectTo: 'employees' ,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
