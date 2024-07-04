import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    DashboardComponent,
    RegistrationFormComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
