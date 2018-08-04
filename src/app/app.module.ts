import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Carousel Component Call
import { CarouselComponent } from '../components/carousel/carousel';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { LatestIssuesPage } from '../pages/latest-issues/latest-issues';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewOffersPage } from '../pages/view-offers/view-offers';
import { DealsPage } from '../pages/deals/deals';
import { PosesPage } from '../pages/poses/poses';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    LatestIssuesPage,
    ViewOffersPage,
    DealsPage,
    PosesPage,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    LatestIssuesPage,
    ViewOffersPage,
    DealsPage,
    PosesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
