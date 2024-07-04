import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

=======
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
>>>>>>> f4c1ab51ad372dcd55095daf2fe29fb315113280


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    DashboardComponent,
    RegistrationFormComponent,
<<<<<<< HEAD

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
=======
    SidebarComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SidebarModule.forRoot()
>>>>>>> f4c1ab51ad372dcd55095daf2fe29fb315113280
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
