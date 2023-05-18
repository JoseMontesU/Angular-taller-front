import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxmimasCitasComponent } from './proxmimas-citas.component';

describe('ProxmimasCitasComponent', () => {
  let component: ProxmimasCitasComponent;
  let fixture: ComponentFixture<ProxmimasCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxmimasCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxmimasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
