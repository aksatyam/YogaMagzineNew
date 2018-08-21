import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DealsPage } from '../deals/deals';
import { ViewOffersPage } from '../view-offers/view-offers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public magdata:any;
  constructor(public navCtrl: NavController, public navParms: NavParams) {
    this.magdata = this.navParms.get('list');    
  }

  openDealsPage(){
    this.navCtrl.push(DealsPage,{ list : this.magdata});
  }

  openViewPage(){
    this.navCtrl.push(ViewOffersPage, { list : this.magdata});
  }
}
