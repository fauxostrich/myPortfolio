import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
