import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
// =======
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { SidebarModule } from 'ng-sidebar';
// import { AdminPanelComponent } from './admin-panel/admin-panel.component';
// >>>>>>> f4c1ab51ad372dcd55095daf2fe29fb315113280
=======
<<<<<<< HEAD

import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { FormGroup,FormsModule,Validators,ReactiveFormsModule} from '@angular/forms';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
=======
<<<<<<< HEAD
>>>>>>> b4cdecc17853d6d38f02f77c7618e18af58cbc09
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

>>>>>>> 35943f25c2211de2c8db61fb47ad3ba84ee74be1
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';
=======
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { FormsModule } from '@angular/forms';
>>>>>>> 35943f25c2211de2c8db61fb47ad3ba84ee74be1
>>>>>>> 44e061325fe1921d4b238e08f7f4dcc918e58f83


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    OrganizationRegisterComponent,
    SidebarComponent,
    AdminPanelComponent,
    DashboardComponent,
<<<<<<< HEAD
   RegistrationFormComponent,
   ResetPasswordComponent,
   AddProjectComponent
    
=======
    RegistrationFormComponent,
<<<<<<< HEAD
    AddTaskComponent,
 ],
=======
<<<<<<< HEAD
    SidebarComponent,
    AdminPanelComponent,
=======
<<<<<<< HEAD
    OrganizationRegisterComponent
=======
<<<<<<< HEAD
>>>>>>> b4cdecc17853d6d38f02f77c7618e18af58cbc09

>>>>>>> 85851cc09698592c44bc2317e465386e09c9327b
>>>>>>> 35943f25c2211de2c8db61fb47ad3ba84ee74be1
  ],
>>>>>>> 44e061325fe1921d4b238e08f7f4dcc918e58f83
  imports: [
    // Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
=======
<<<<<<< HEAD
    HttpClientModule,
=======
    

    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule 
<<<<<<< HEAD
=======
>>>>>>> f4c1ab51ad372dcd55095daf2fe29fb315113280
>>>>>>> 85851cc09698592c44bc2317e465386e09c9327b
>>>>>>> b4cdecc17853d6d38f02f77c7618e18af58cbc09
>>>>>>> 35943f25c2211de2c8db61fb47ad3ba84ee74be1
>>>>>>> 44e061325fe1921d4b238e08f7f4dcc918e58f83
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
