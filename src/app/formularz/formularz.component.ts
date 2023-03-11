import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  public forma = new FormGroup( {
    imie: new FormControl(
      "Jan", 
      {validators: [], updateOn: "change"}
    ),
    nazwisko: new FormControl(
      "Nowak", 
      {validators: [Validators.minLength(2), Validators.maxLength(10)], updateOn: "change"}
    ),
    aktywnosc: new FormControl(
      null,
      {validators: [], updateOn: "change"}
    ),
    plec: new FormControl(
      null,
      {validators: [], updateOn: "change"}
    ),
    napoje: new FormGroup( {
      kawa: new FormControl(false, {validators: [], updateOn: "change"}),
      herbata: new FormControl(false, {validators: [], updateOn: "change"}),
      cola: new FormControl(false, {validators: [], updateOn: "change"}),
      kakao: new FormControl(false, {validators: [], updateOn: "change"})
    }),
    komentarze: new FormControl ( null, {validators: [], updateOn: "change"})
  })

  constructor () {
    this.sub = this.forma.controls.imie.valueChanges.subscribe( 
      (wartosc) => {
        console.log('f strzalk sub wartosc= '+wartosc);
        if (wartosc == 'Hubert') {
          this.forma.controls.nazwisko.setValue('Muller');
        }
      }
    )
  }

  zmienNazwisko():void {
    this.forma.controls.nazwisko.setValue('Kowalsky');
  }

  wyslijFormularz():void {
    const wartosciFormy = this.forma.value;
    //console.log(wartosciFormy.imie);
    let wpis: Wpis = {
      imie: wartosciFormy.imie,
      nazwisko: wartosciFormy.nazwisko,
      plec: wartosciFormy.plec,
      napoje: {
        kawa: wartosciFormy.napoje?.kawa,
        herbata: wartosciFormy.napoje?.herbata,
        cola: wartosciFormy.napoje?.cola,
        kakao: wartosciFormy.napoje?.kakao,
      },
      komentarze: wartosciFormy.komentarze,
      aktywnosc: wartosciFormy.aktywnosc,
    };

    console.log(wpis);
  }

  ngOnInit(): void {
    console.log('po konstruktorze')
  }

  ngOnDestroy(): void {
    console.log('niszczenie komponentu');
    this.sub.unsubscribe();
  }

}


export interface Wpis {
  imie: string | null | undefined;
  nazwisko: string | null | undefined;
  aktywnosc: string | null | undefined;
  plec: null|'k'|'m'|undefined;
  napoje: {
    kawa: boolean  | null | undefined;
    herbata: boolean | null| undefined;
    kakao: boolean | null| undefined;
    cola: boolean | null| undefined;
  } | undefined,
  komentarze: string | null | undefined;
}