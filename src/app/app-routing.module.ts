import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'app-registration-form', component: RegistrationFormComponent },
  { path: 'emp_register', component: RegistrationFormComponent },
  { path: 'employees', component: AdminPanelComponent },
  { path: 'workControl', component: DashboardComponent },
  { path: 'resetpassword/signin', component: SignInPageComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'dashboard', component: DashboardComponent },
];
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
