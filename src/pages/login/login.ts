import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LatestIssuesPage } from '../latest-issues/latest-issues';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage(){
    this.navCtrl.setRoot(SignupPage);
  }

  openDashboard(){
    this.navCtrl.setRoot(LatestIssuesPage);
  }
}
