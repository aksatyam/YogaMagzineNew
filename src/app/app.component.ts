import { BlankPage } from './../pages/blank/blank';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';
import { LatestIssuesPage } from '../pages/latest-issues/latest-issues';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =SplashPage;

  pages: Array<{title: string, component: any}>;
  account : Array<{title: string, component: any}>;
  settings : Array<{title: string, component: any}>;
  about : Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Latest Issues', component: LatestIssuesPage}, 
      { title: 'Offers', component: BlankPage},        
    ];

    this.account = [
      { title: 'Logout', component: BlankPage}, 
      { title: 'Restore Purcahses', component: BlankPage}, 
      { title: 'Subscriptions', component: BlankPage}, 
      { title: 'Vouchers', component: BlankPage},        
    ];

    this.settings =[
      { title: 'Settings and Notifications', component: BlankPage},
    ];

    this.about = [
      { title: 'More from the publisher', component: BlankPage},
      { title: 'Tell a friend', component: BlankPage},
      { title: 'Terms and Conditions', component: BlankPage},
      { title: 'Privacy & Policy', component: BlankPage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component,{'title': page.title});
  }
}
