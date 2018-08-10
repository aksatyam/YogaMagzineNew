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
import { SplashPage } from '../pages/splash/splash';
import { PreviewPage } from '../pages/preview/preview';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { WebServicesProvider } from '../providers/web-services/web-services';
import { HttpClientModule } from '@angular/common/http';

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
    CarouselComponent,
    SplashPage,
    PreviewPage,
    SubscribePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    PosesPage,
    SplashPage,
    PreviewPage,
    SubscribePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebServicesProvider
  ]
})
export class AppModule {}
