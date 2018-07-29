import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-latest-issues',
  templateUrl: 'latest-issues.html',
})
export class LatestIssuesPage {
  public selectedTab:any='Latest Issue';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestIssuesPage');
  }

}