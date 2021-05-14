import { Component } from '@angular/core';

import { FilmesPage } from '../filmes/filmes';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
