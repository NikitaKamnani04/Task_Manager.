import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from './add-task/add-task.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';



const routes: Routes = [

  { path: 'signin', component: SignInPageComponent },
  { path: '', component: SignInPageComponent },
  {
    path: 'add-task',
    component: AddTaskComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'app-registration-form',
    component: RegistrationFormComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'admin/emp_register',
    component: RegistrationFormComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'addproject',
    component: AddProjectComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'app-registration-form',
    component: RegistrationFormComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'emp_register',
    component: RegistrationFormComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'employees',
    component: AdminPanelComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'org',
    component: OrganizationRegisterComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'resetpassword/signin',
    component: SignInPageComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'addproject',
    component: AddProjectComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [UserAuthGuard],
  },

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
