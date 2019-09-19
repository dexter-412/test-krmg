import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { TopBannerComponent } from './main-page/top-banner/top-banner.component';
import { WeOfferComponent } from './main-page/we-offer/we-offer.component';
import { AboutUsComponent } from './main-page/about-us/about-us.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBannerComponent,
    WeOfferComponent,
    AboutUsComponent,
    FooterComponent,
    MainPageComponent,
    AutorizationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
