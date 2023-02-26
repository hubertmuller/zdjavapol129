import { Component } from '@angular/core';
import { DaneService, DanePogodowe } from '../dane.service';

@Component({
  selector: 'app-pogoda',
  templateUrl: './pogoda.component.html',
  styleUrls: ['./pogoda.component.scss']
})
export class PogodaComponent {

  public danePogodowe: DanePogodowe[] = [];
  public daneZaladowane = false;

  constructor(private dane:DaneService) {
    console.log('poczatek konstruktora komponetu');
    this.dane.pobierzPogode().subscribe(
      (wartosc) => {
        this.danePogodowe = wartosc;
        this.daneZaladowane = true;
        console.log('wywolanie f strzalkowej jako reakcja na nadejscie dancych');
      }
    );
    console.log('koniec konstruktora komponetu');
  }

  public konwertujZachmurzenie (stopien: number): string {
    return this.dane.konwertujZachmurzenie(stopien);
  }

  /*private dane!:DaneService;
  constructor(dane:DaneService) {
  }*/


}
