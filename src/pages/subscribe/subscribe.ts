import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',
})
export class SubscribePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribePage');
  }

  previewPage(){
    this.navCtrl.push(HomePage);
  }

  openPage(){
    this.navCtrl.push(PaymentPage);
  }
}
