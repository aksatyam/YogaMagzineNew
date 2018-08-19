import { WebServicesProvider } from './../providers/web-services/web-services';
import { BlankPage } from './../pages/blank/blank';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
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

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public webServices: WebServicesProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Latest Issues', component: LatestIssuesPage}, 
      { title: 'Offers', component: BlankPage},        
    ];

    this.account = [
      { title: 'Logout', component: null}, 
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
    if(page.component == null){
      this.logoutCall();
    }
    else{
      this.nav.setRoot(page.component,{'title': page.title});
    }
  }

  logoutCall(){
    let alert = this.alertCtrl.create({
      title: 'Attention',
      subTitle: 'Are you sure you want to Log Out  ?',
      buttons: [{
        text: 'NO',
        handler: data=> {
          console.log('Cancel Clicked');
        }
      },
        {
          text: 'YES',
          handler: data=> {
            this.webServices.setLoading();
            this.webServices.postLogout().then(()=> {
              setTimeout(()=> {
                this.webServices.removeLoading();
                location.reload();
              }, 500);
            });
          }
        }],
      cssClass: 'alertcss'
    });
    alert.present();
  }
}
