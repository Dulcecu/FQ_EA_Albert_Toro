import { Component } from '@angular/core';
import {ActionSheetController, NavController,LoadingController,ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from "@angular/http";
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-list',
  templateUrl: 'detalleusuario.html'
})
export class DetalleUserPage {
  name:string;
  studies:string
  subjects:string
  phone:string
  address:string
  card:boolean;
  grid: Array<string>;
  filterDB:string;
  constructor(public events: Events, public alertCtrl: AlertController, public http: Http, public storage: Storage, public navCtrl: NavController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController) {
    this.card=false;
  }

  filter(){
    var data={
      name:this.filterDB
    }
    this.http.post("http://10.193.170.131:3500/userdetail",data).subscribe(data => {
      this.name = data.json()[0].name;
      this.card=true;
      console.log(data.json())
      this.studies=data.json()[0].studies
      this.subjects=data.json()[0].subjects
      this.phone=data.json()[0].phone
      this.address=data.json()[0].address

    }, error => {
      console.log("error")
    });

  }

}
