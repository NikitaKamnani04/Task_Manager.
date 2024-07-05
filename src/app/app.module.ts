import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
<<<<<<< HEAD
import { FormGroup,FormsModule,Validators,ReactiveFormsModule} from '@angular/forms';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
=======
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

=======
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
>>>>>>> f4c1ab51ad372dcd55095daf2fe29fb315113280

>>>>>>> 85851cc09698592c44bc2317e465386e09c9327b

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    DashboardComponent,
    RegistrationFormComponent,
<<<<<<< HEAD
    OrganizationRegisterComponent
=======
<<<<<<< HEAD

>>>>>>> 85851cc09698592c44bc2317e465386e09c9327b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
=======
    SidebarComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule 
>>>>>>> f4c1ab51ad372dcd55095daf2fe29fb315113280
>>>>>>> 85851cc09698592c44bc2317e465386e09c9327b
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
