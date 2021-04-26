import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GodzillaKongPage } from '../filmes/godzilla-kong/godzilla-kong';
import { LigaJusticaPage } from '../filmes/liga-justica/liga-justica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  godzillaKong = GodzillaKongPage;
  ligaJustica = LigaJusticaPage;

  constructor(public navCtrl: NavController) {

  }

}
