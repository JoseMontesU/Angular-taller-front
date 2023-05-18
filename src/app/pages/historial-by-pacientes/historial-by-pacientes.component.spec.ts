import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialByPacientesComponent } from './historial-by-pacientes.component';

describe('HistorialByPacientesComponent', () => {
  let component: HistorialByPacientesComponent;
  let fixture: ComponentFixture<HistorialByPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialByPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialByPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
