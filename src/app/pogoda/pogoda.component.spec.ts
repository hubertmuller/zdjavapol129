import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PogodaComponent } from './pogoda.component';

describe('PogodaComponent', () => {
  let component: PogodaComponent;
  let fixture: ComponentFixture<PogodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PogodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PogodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
