// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdMakerComponent } from './main/ad-maker/ad-maker.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ContactComponent } from './main/contact/contact.component';

// SERVICES
import { AppService } from './service/app.service';

// ROUTER
import { appRoutes } from './routerConfig';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdMakerComponent,
    AboutUsComponent,
    PortfolioComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
