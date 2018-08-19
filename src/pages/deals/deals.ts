import { WebServicesProvider } from './../../providers/web-services/web-services';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public webServices:WebServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
  }

}
