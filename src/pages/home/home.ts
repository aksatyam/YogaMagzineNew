import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DealsPage } from '../deals/deals';
import { ViewOffersPage } from '../view-offers/view-offers';
import { PosesPage } from '../poses/poses';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openDealsPage(){
    this.navCtrl.push(DealsPage);
  }

  openViewPage(){
    this.navCtrl.push(ViewOffersPage);
  }

  openPosesPage(){
    this.navCtrl.push(PosesPage);
  }
}
