import { LatestIssuesPage } from './../latest-issues/latest-issues';
import { WebServicesProvider } from './../../providers/web-services/web-services';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  public loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public menuCtrl: MenuController, public webServices: WebServicesProvider) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  openPage(){
    this.webServices.checkLogin().then(login=>{
      console.log(login);
      if(login){
        this.navCtrl.setRoot(LatestIssuesPage)
      }
      else{
        this.navCtrl.setRoot(LoginPage);
      }
    })
  }

}
