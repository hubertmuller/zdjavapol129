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
    )
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

  ngOnInit(): void {
    console.log('po konstruktorze')
  }

  ngOnDestroy(): void {
    console.log('niszczenie komponentu');
    this.sub.unsubscribe();
  }

}
