import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { PartnerComponent } from './static/partner/partner.component';
import { FooterComponent } from './static/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { LanguageComponent } from './static/language/language.component';
import { MenuComponent } from './static/menu/menu.component';
import { ScrollTopComponent } from './static/scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PartnerComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FourOhFourComponent,
    LanguageComponent,
    MenuComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
