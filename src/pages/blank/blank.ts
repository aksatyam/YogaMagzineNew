import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  public title:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

}
