import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, ToastController, LoadingController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { Storage } from '@ionic/storage';

@Injectable()
export class WebServicesProvider {

  public BASE_URL: string = "http://yogamagazine.online/services/public/";
  public platform:any;
  public loading:any;
  public toast:any;
  public message:any;
  public alert:any;
  public titleAlert:any;
  public subTitleAlert:any;
  public token:any="CP26zgTXIfNltPbDYfl48uta7s4eHszdtYWBGjnywFlPuacgbDGQPEEQSEQp";
  public UID:any;
  constructor(  public http: HttpClient, 
                public plft: Platform, 
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public storage: Storage) {
   
  }

  checkLogin(){
    return new Promise(resolve => {
      this.storage.get("TOKEN").then((val) => {
        this.token = val;
      });
      this.storage.get("UID").then((val) => {
        this.UID = val;
        if (this.token && this.UID) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  //SET ACCESS TOKEN
  setToken(token){
    this.storage.set('TOKEN', token);
    this.token = token;
  }

  //SET USER ID
  setUserId(UserID){
    this.storage.set('UID', UserID);
    this.UID = UserID;
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
      content: 'Please wait...'
    });
  
    this.loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    this.loading.present();
  }

  removeLoading(){
    this.loading.dismiss();
  }

  getPlatform(){
    return new Promise(resolve => {
      resolve(this.plft.platforms());
    });    
  }

  //POST METHOD CALL
  postData(u,data): Observable<any>{
    return this.http.post(u,data)
    .map(res=>res)
    .catch(err=> Observable.throw(err));
  }

  //GET METHOD CALL
  getData(u): Observable<any>{
    return this.http.get(u)
    .map(res=>res)
    .catch(err => Observable.throw(err));
  }

  //API Calling 
  //User Login
  postLogin(username,password){
    let myKeyVals={ 'email': username, 'password': password};
    let u=this.BASE_URL+"user"+"/"+"login";
    return this.postData(u,myKeyVals);
  }
  
  //User Register
  postSignUp(data){
    let u = this.BASE_URL+"user"+"/"+"register"
    return this.postData(u,data);
  }

  //Logout  Call
  postLogout(){
    return new Promise((resolve) => {
      this.storage.set('ACCESS_TOKEN', '');
      this.storage.set('UID', '');
      resolve(true);
    });
  }
}
