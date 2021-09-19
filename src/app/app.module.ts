import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AndroidAppComponent } from './android-app/android-app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegetablesComponent } from './Categories/vegetables/vegetables.component';
import { GroceryComponent } from './Categories/grocery/grocery.component';
import { FruitsComponent } from './Categories/fruits/fruits.component';
import { OnionComponent } from './Categories/vegetables/onion/onion.component';
import { PotatoComponent } from './Categories/vegetables/potato/potato.component';
import { RiceComponent } from './Categories/grocery/rice/rice.component';
import { OilComponent } from './Categories/grocery/oil/oil.component';
import { SugarComponent } from './Categories/grocery/sugar/sugar.component';
import { MangoComponent } from './Categories/fruits/mango/mango.component';
import { AppleComponent } from './Categories/fruits/apple/apple.component';
import { GuavaComponent } from './Categories/fruits/guava/guava.component';
import { ChiliComponent } from './Categories/vegetables/chili/chili.component';
import { BananasComponent } from './Categories/fruits/bananas/bananas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AndroidAppComponent,
    ProductDetailsComponent,
    VegetablesComponent,
    GroceryComponent,
    FruitsComponent,
    OnionComponent,
    PotatoComponent,
    RiceComponent,
    OilComponent,
    SugarComponent,
    MangoComponent,
    AppleComponent,
    GuavaComponent,
    ChiliComponent,
    BananasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
