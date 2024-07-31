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
  {
    path: '',
    canActivate: [UserAuthGuard],
    children: [
      { path: 'add-task', component: AddTaskComponent },
      { path: 'app-registration-form', component: RegistrationFormComponent },
      { path: 'admin/emp_register', component: RegistrationFormComponent },
      { path: 'admin', component: AdminPanelComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
      { path: 'addproject', component: AddProjectComponent },
      { path: '', component: SignInPageComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'app-registration-form', component: RegistrationFormComponent },
      { path: 'emp_register', component: RegistrationFormComponent },
      { path: 'employees', component: AdminPanelComponent },
      { path: 'org', component: OrganizationRegisterComponent },
      { path: 'resetpassword/signin', component: SignInPageComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
      { path: 'addproject', component: AddProjectComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  { path: 'signin', component: SignInPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
