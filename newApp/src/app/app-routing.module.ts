import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
const routes: Routes = [{path:'',component:LoginComponent},{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},{path:'profile',component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
