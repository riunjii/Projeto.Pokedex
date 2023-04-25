import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeimagemComponent } from './pokeimagem.component';

describe('PokeimagemComponent', () => {
  let component: PokeimagemComponent;
  let fixture: ComponentFixture<PokeimagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeimagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeimagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
