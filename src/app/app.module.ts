import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderComponent } from './header/header.component';
import { NavAreaComponent } from './nav-area/nav-area.component';
import { SliderWrapComponent } from './slider-wrap/slider-wrap.component';
import { CallToActionAreaComponent } from './call-to-action-area/call-to-action-area.component';
import { PromotionAreaComponent } from './promotion-area/promotion-area.component';
import { TrendingAreaComponent } from './trending-area/trending-area.component';
import { TToBSliderAreaComponent } from './t-to-b-slider-area/t-to-b-slider-area.component';
import { FreshBlogAreaComponent } from './fresh-blog-area/fresh-blog-area.component';
import { TestimonialAreaComponent } from './testimonial-area/testimonial-area.component';
import { BrandingAreaComponent } from './branding-area/branding-area.component';
import { EntireFooterAreaComponent } from './entire-footer-area/entire-footer-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderComponent,
    NavAreaComponent,
    SliderWrapComponent,
    CallToActionAreaComponent,
    PromotionAreaComponent,
    TrendingAreaComponent,
    TToBSliderAreaComponent,
    FreshBlogAreaComponent,
    TestimonialAreaComponent,
    BrandingAreaComponent,
    EntireFooterAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }