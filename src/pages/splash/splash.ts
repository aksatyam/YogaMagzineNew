import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  public loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  openPage(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    }, 1000);
  }

}
