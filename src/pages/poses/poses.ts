import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-poses',
  templateUrl: 'poses.html',
})
export class PosesPage {
  public posesData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.posesData = this.navParams.get('list');
    console.log(this.posesData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosesPage');
  }

}
