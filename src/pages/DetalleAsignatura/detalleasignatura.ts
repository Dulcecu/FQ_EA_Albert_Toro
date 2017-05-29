import { Component } from '@angular/core';
import {ActionSheetController, NavController,LoadingController,ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from "@angular/http";
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-list',
  templateUrl: 'detalleasignatura.html'
})
export class DetalleAsignaturaPage {
  grid: Array<string>;
 subName: string;
  constructor(public events: Events, public alertCtrl: AlertController, public http: Http, public storage: Storage, public navCtrl: NavController, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController) {

  }

  filter(){
    var data = {name:this.subName};
    this.http.post("http://10.193.170.131:3500/getdetailsub",data).subscribe(data => {
      this.grid = Array(data.json().length);
      for(let i=0;i<data.json().length;i++) {
        this.grid[i] = data.json()[i]
      }

    }, error => {
      console.log("error")
    });

  }

}
