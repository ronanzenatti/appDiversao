import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GodzillaKongPage } from '../filmes/godzilla-kong/godzilla-kong';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  godzillaKong = GodzillaKongPage;

  constructor(public navCtrl: NavController) {

  }

}
