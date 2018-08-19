import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, ToastController, LoadingController, AlertController } from 'ionic-angular';

@Injectable()
export class WebServicesProvider {
  public platform:any;
  public loading:any;
  public toast:any;
  public message:any;
  public alert:any;
  public titleAlert:any;
  public subTitleAlert:any;

  constructor(  public http: HttpClient, 
                public plft: Platform, 
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController) {
    console.log('Hello WebServicesProvider Provider');
  }

  //ALl Pages Call Methods

  setAlert(title, subtitle){
    this.alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    this.alert.present();
  }

  setToast(message:string,duration?:number,position?:string){
   this.toast = this.toastCtrl.create({
      message: message,
      duration: duration = duration ? duration : 2000,
      position: position = position ? position : 'top'
    });
  
    this.toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    this.toast.present();
  }

  setLoading(){
   this.loading = this.loadingCtrl.create({
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
    });
  
    this.loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    this.loading.present();
  }

  removeLoading(){
    this.loading.dismiss();
  }
}
