import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'portal';
  //public Hubert = 'moje imie';
  private subtitle = 'subtitle';
  
  constructor() {
    this.title = 'inny lancuch';
    var x:number = 5; //number, boolean, string
    var y:any = 5;
    var z:number[] = [1,2,3,4];
    var u:number | string[] = ["lancuch"];
    y = "lancuch";
  }

  metoda1(arg1: number):string {
    return "Hubert" + arg1;
  }

  metoda():void {

  }
  
}
