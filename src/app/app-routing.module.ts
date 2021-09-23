import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AndroidAppComponent } from './android-app/android-app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VegetablesComponent } from './Categories/vegetables/vegetables.component';
import { GroceryComponent } from './Categories/grocery/grocery.component';
import { FruitsComponent } from './Categories/fruits/fruits.component';
import { ChiliComponent } from './Categories/vegetables/chili/chili.component';
import { OnionComponent } from './Categories/vegetables/onion/onion.component';
import { PotatoComponent } from './Categories/vegetables/potato/potato.component';
import { OilComponent } from './Categories/grocery/oil/oil.component';
import { RiceComponent } from './Categories/grocery/rice/rice.component';
import { SugarComponent } from './Categories/grocery/sugar/sugar.component';
import { AppleComponent } from './Categories/fruits/apple/apple.component';
import { BananasComponent } from './Categories/fruits/bananas/bananas.component';
import { MangoComponent } from './Categories/fruits/mango/mango.component';
import { CartComponent } from './cart/cart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'android-app', component: AndroidAppComponent },

  {
    path: 'Categories',
    children: [
      { path: 'vegetables', component: VegetablesComponent },
      { path: 'grocery', component: GroceryComponent },
      { path: 'fruits', component: FruitsComponent }
    ]
  },
  { path: 'index/:prodId', component: ProductDetailsComponent },
  { path: 'Categories/vegetables/:prodId', component: ProductDetailsComponent },
  { path: 'Categories/grocery/:prodId', component: ProductDetailsComponent },
  { path: 'Categories/fruits/:prodId', component: ProductDetailsComponent },
  { path: 'Categories/vegetables/potato/:prodId', component: ProductDetailsComponent },
  { path: 'cart',component:CartComponent},
  { path: 'buy-now',component:BuyNowComponent},
  //  vegetables accordian path declear
  {
    path: 'Categories',
    children: [
      {
        path: 'vegetables',
        children: [
          { path: 'chili', component: ChiliComponent },
          { path: 'onion', component: OnionComponent },
          { path: 'potato', component: PotatoComponent }
        ]
      }
    ]
  },

  // grocery accordian path declear
  {
    path: 'Categories',
    children: [
      {
        path: 'grocery',
        children: [
          { path: 'oil', component: OilComponent },
          { path: 'rice', component: RiceComponent },
          { path: 'sugar', component: SugarComponent }
        ]
      }

    ]
  },
  //fruits accordian path declear
  {
    path: 'Categories',
    children: [
      {
        path: 'fruits',
        children: [
          { path: 'apple', component: AppleComponent },
          { path: 'bananas', component: BananasComponent },
          { path: 'mango', component: MangoComponent }
        ]
      }

    ]
  },

  //page not found path
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
