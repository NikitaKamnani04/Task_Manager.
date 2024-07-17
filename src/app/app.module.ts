import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { AddTaskComponent } from './add-task/add-task.component';
import { SidebarModule } from 'ng-sidebar';

import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import { FormGroup,FormsModule,Validators,ReactiveFormsModule} from '@angular/forms';

import {
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { RegFormComponent } from './reg-form/reg-form.component';
import * as ApexCharts from 'apexcharts';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    OrganizationRegisterComponent,
    SidebarComponent,
    AdminPanelComponent,
    DashboardComponent,
   RegistrationFormComponent,
   ResetPasswordComponent,
   AddProjectComponent,
   AddTaskComponent,
   
 ],
 imports: [

   ReactiveFormsModule,
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   AppRoutingModule,
   HttpClientModule,
   AppRoutingModule,
   SidebarModule.forRoot(),
   HttpClientModule,
   Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
