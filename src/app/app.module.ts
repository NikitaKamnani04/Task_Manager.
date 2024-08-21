import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AddTaskComponent } from './add-task/add-task.component';

import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import {
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// PrimeNg
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

import { TooltipModule } from 'primeng/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';

import { DropdownModule } from 'primeng/dropdown';
import { QuillModule } from 'ngx-quill';

import { PaginatorModule } from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import {SkeletonModule} from 'primeng/skeleton';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
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
    NavbarComponent,
    CalendarComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    BrowserAnimationsModule,
    QuillModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    TooltipModule,
    PaginatorModule,
    DividerModule,
    SliderModule,
    FullCalendarModule,
    SkeletonModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
