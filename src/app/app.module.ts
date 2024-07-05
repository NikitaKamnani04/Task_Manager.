import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormGroup,FormsModule,Validators,ReactiveFormsModule} from '@angular/forms';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    DashboardComponent,
    RegistrationFormComponent,
    OrganizationRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
