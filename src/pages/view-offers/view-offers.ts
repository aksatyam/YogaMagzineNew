import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view-offers',
  templateUrl: 'view-offers.html',
})
export class ViewOffersPage {
  public offer:any='beginner';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOffersPage');
  }

}
