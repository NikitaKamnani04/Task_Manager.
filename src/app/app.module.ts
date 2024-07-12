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






import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


// import { FormsModule } from '@angular/forms';


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
   AddTaskComponent
 ],



  



  imports: [

    ReactiveFormsModule,

    // Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    Ng2SearchPipeModule,

    FormsModule,

    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
