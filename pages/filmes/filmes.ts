import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html'
})
export class FilmesPage {
  filmes = [
    {
      nome: 'Eurotrip: Passaporte para a Confusão',
      cartaz:
        'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/rnzfFPhJZLdJS40nzvhNyfZ0ahD.jpg',
      lancamento: '20 de fevereiro de 2004'
    },
    {
      nome: 'Minha Mãe é Uma Peça: O Filme',
      cartaz:
        'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/5cF5v8N0wMALMcgEHpBZHyYQZDl.jpg',
      lancamento: '21 de junho de 2013'
    }
  ];

  constructor(public navCtrl: NavController) {}
}
