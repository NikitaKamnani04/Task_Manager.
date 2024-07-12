import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddTaskComponent } from './add-task/add-task.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:'add-task', component:AddTaskComponent},
  {path:'app-registration-form',component:RegistrationFormComponent}
];
=======
<<<<<<< HEAD
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [{path:'resetpassword/signin',component:SignInPageComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'addproject',component:AddProjectComponent}
];

=======
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'admin/emp_register', component: RegistrationFormComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'user', component: DashboardComponent },
];
>>>>>>> 35943f25c2211de2c8db61fb47ad3ba84ee74be1
>>>>>>> 44e061325fe1921d4b238e08f7f4dcc918e58f83

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
