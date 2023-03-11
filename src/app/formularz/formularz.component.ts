import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DaneService } from '../dane.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private sub2: Subscription;
  public pracujacy = false;

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
    staz: new FormControl(
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
  
  

  constructor (private daneService: DaneService) {
    this.sub = this.forma.controls.imie.valueChanges.subscribe( 
      (wartosc) => {
        console.log('f strzalk sub wartosc= '+wartosc);
        if (wartosc == 'Hubert') {
          this.forma.controls.nazwisko.setValue('Muller');
        }
      }
    )

    this.sub2 = this.forma.controls.aktywnosc.valueChanges.subscribe(
      (wartosc) => {
        if (wartosc == 'p') {
          this.pracujacy = true;
        } else {
          this.pracujacy = false;
          //zerowac staz pracy
          this.forma.controls.staz.setValue(null);
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

    this.daneService.zapiszFormularz(wpis).subscribe(
      (_dane) => {
        console.log('sukces');
      },
      () => {
        console.log('dane wyslano ale nie otrzyzmano odpowiedzi - prawdopodobnie adres nei istenieje lub jest wylaczony');
      }
    );
    


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