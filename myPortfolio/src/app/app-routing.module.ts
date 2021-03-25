import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: "\log-in", component: LogInComponent},
  {path: "\sign-up", component: SignUpComponent},
  {path: "\portfolio", component: PortfolioComponent},
  {path: "", redirectTo: "\log-in", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
