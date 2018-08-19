import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebServicesProvider } from './../../providers/web-services/web-services';

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  public title:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public webServices:WebServicesProvider) {
    this.title = this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

}
