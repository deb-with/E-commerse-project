import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { GroceryComponent } from './grocery/grocery.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AndroidAppComponent } from './android-app/android-app.component';

const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'/index'},
  { path:'index', component:HomeComponent},
  { path:'vegetables',component:VegetablesComponent},
  { path:'grocery',component:GroceryComponent},
  { path:'fruits',component:FruitsComponent},
  { path:'about-us',component:AboutUsComponent},
  { path:'contact', component:ContactComponent},
  { path:'login',component:LoginComponent},
  { path:'forget-password',component:ForgetPasswordComponent},
  { path:'register',component:RegisterComponent},
  { path:'android-app',component:AndroidAppComponent},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
