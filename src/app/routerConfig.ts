import { Routes } from '@angular/router';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { AdMakerComponent } from './main/ad-maker/ad-maker.component';
import { ContactComponent } from './main/contact/contact.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AdMakerComponent,
    data: {
      animation: {
        value: 'ad-maker',
      }
    }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      animation: {
        value: 'about-us',
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      animation: {
        value: 'contact',
      }
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      animation: {
        value: 'portfolio',
      }
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];
