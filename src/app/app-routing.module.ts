import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [{path:'resetpassword/signin',component:SignInPageComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'addproject',component:AddProjectComponent},
  { path: 'emp_register', component: RegistrationFormComponent },
  { path: 'admin', component: AdminPanelComponent },
  {path: 'user', component: DashboardComponent}
];

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// const routes: Routes = [
//   { path: 'emp_register', component: RegistrationFormComponent },
//   { path: 'admin', component: AdminPanelComponent },
//   {path: 'user', component: DashboardComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
