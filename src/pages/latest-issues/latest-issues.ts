import { WebServicesProvider } from './../../providers/web-services/web-services';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { SubscribePage } from '../subscribe/subscribe';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-latest-issues',
  templateUrl: 'latest-issues.html',
})
export class LatestIssuesPage {
    public data: any=[];
    public slides: any = [];
    public start: number = 0;
    public end: number = 5;
    public selectedTab:any='Latest Issue';
    public myMagzine:any=[]; 

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public menuCtrl: MenuController, public webServices: WebServicesProvider) {
    this.menuCtrl.enable(true);
    this.webServices.getAllMagzines().then(res => this.data = res);
    this.CallData();
  }

  ionViewDidLoad() {
    this.getSub();
  }

  CallData(){
      this.webServices.setLoading();
    this.webServices.getAllMageZineList()
        .subscribe(res=>{
            this.webServices.removeLoading();
            this.webServices.setAllMagzines(res);
            this.getCurrentSlides();
        });
  }

  getCurrentSlides() {
    if (this.start == this.data.length) {
        this.start = 0;
        this.end = 5;
    }
    this.slides = [];
    for (var i = this.start; i <= this.end; i++) {
        this.slides.push(this.data[i]);
    }

    this.start = this.end + 1;
    if ((this.start + this.end) < this.data.length) this.end = this.start + this.end;
    else this.end = this.data.length - 1;
}

  selectItem(item: any) {
    this.navCtrl.push(SubscribePage);
  }

  openPage(list){
      this.navCtrl.push(HomePage,{list});
  }

  segmentChanged(){
    if(this.selectedTab == 'My Magzines'){
        console.log('my magzine');
       this.webServices.getSubMagzine().then(res => {
           this.myMagzine = res;
           this.myMagzine.reverse();
        });
    }
    else{
        console.log('latest');
        this.webServices.getAllMagzines().then(res => this.data = res);
    }
  }

  getSub(){
      this.myMagzine = [];
      this.webServices.getAllSubsciptionMagzines()
        .subscribe(res=>{
            this.webServices.setSubMagzine(res);
        });
  }
}
