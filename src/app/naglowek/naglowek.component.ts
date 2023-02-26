import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss']
})
export class NaglowekComponent {

  @Input()
  public nazwa = 'Domyslna'; 

}
