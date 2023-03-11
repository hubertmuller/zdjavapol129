import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wpis } from './formularz/formularz.component';
import { env } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class DaneService {

  constructor(private http: HttpClient) { 
    console.log('konstruktor servisu Dane');
  }

  pobierzPogode(): Observable<DanePogodowe[]> {
    console.log('wywolano mtode pobierz pogode');
    return this.http.get<DanePogodowe[]>(
      env.apiUrl + 'api/pogoda/miasta'
      );
    /*return [ 
      {miasto: 'Krakow', temperatura: 30, zachmurzenie: 3},
      {miasto: 'Warszawa', temperatura: 10, zachmurzenie: 1},
      {miasto: 'Gdansk', temperatura: 30, zachmurzenie: 3},
      {miasto: 'Lublin', temperatura: 10, zachmurzenie: 1},
      {miasto: 'Bialystok', temperatura: 30, zachmurzenie: 3},
      {miasto: 'Wroclaw', temperatura: 10, zachmurzenie: 1} 
    ];*/
  }

  zapiszFormularz(wpis: Wpis):Observable<any> {
    return this.http.post<any>(
      env.apiUrl + 'api/pogoda/formularz',
      wpis);
  }

  konwertujZachmurzenie(stopien: number):string {
    if (stopien == 0) {
      return 'zerowe';
    } else if (stopien == 1) {
      return 'niskie';
    } else {
      return 'wysokie';
    }
  }

}

export interface DanePogodowe {
  id: number;
  miasto: string;
  temperatura: number;
  zachmurzenie: 0 | 1 | 2 | 3 | 4 ;
}
