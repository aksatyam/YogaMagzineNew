import { WebServicesProvider } from './../../providers/web-services/web-services';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LatestIssuesPage } from '../latest-issues/latest-issues';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public webServices: WebServicesProvider) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage(){
    this.navCtrl.setRoot(SignupPage);
  }

  openDashboard(){
    this.webServices.setLoading();
    this.webServices.postLogin('test@talha.com','123')
    .subscribe(res=>{
      this.webServices.removeLoading();
      if(res['success']){
        this.webServices.setToken(res['api_token']);
        this.webServices.setUserId(res['user_id']);
        this.navCtrl.setRoot(LatestIssuesPage);
      }
      else{
        this.webServices.setAlert('Attention!', res['error']);
      }
    });
  }
}
