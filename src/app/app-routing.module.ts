import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateEmployeeComponent} from './create-employee/create-employee.component'
import {UpdateEmployeeComponent} from './update-employee/update-employee.component'
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component'
import {EmployeeComponent} from "./employee/employee.component";
const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'create-employee',component:CreateEmployeeComponent},

  {path:'update-employee',component:UpdateEmployeeComponent},
  {path:'delete-employee',component:DeleteEmployeeComponent},
  {path:'',redirectTo: 'employees' ,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
