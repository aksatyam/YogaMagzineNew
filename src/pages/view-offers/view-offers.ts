import { WebServicesProvider } from './../../providers/web-services/web-services';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PosesPage } from '../poses/poses';

@Component({
  selector: 'page-view-offers',
  templateUrl: 'view-offers.html',
})
export class ViewOffersPage {
  public offer:any='beginner';
  public offerData:any;
  public magData:any;
  public beginer:any = [];
  public intermediate:any = [];
  public expert:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public webServices: WebServicesProvider) {
    this.magData = this.navParams.get('list');
    this.webServices.setLoading();
    this.webServices.getMagzinePackages(this.magData.id).subscribe(res => {
      this.webServices.removeLoading();
      this.offerData = res;
      this.filterData(res);
    })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewOffersPage');
  }

  openPosesPage(val){
    this.navCtrl.push(PosesPage , {list : val});
  }

  filterData(data:[any]){
    console.log(data);
    let poses = data['Poses'];
    poses.forEach(element => {  
      if(element.category == 'Beginner'){
        this.beginer.push(element);
      }
      else if(element.category == 'Intermediate'){
        this.intermediate.push(element);
      }
      else if(element.category == 'Expert'){
        this.expert.push(element);
      }
    });
  }

}
