import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CarouselMIComponent } from './carousel-mi/carousel-mi.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HIWComponent } from './hiw/hiw.component';
import { WACTYOComponent } from './wactyo/wactyo.component';
import { LeftComponent } from './WACTYO/left/left.component';
import { RightComponent } from './WACTYO/right/right.component';
import { StonComponent } from './ston/ston.component';
import { Navbar2Component } from './ston/navbar2/navbar2.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselMIComponent,
    CarouselComponent,
    HIWComponent,
    WACTYOComponent,
    LeftComponent,
    RightComponent,
    StonComponent,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
