import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPastasComponent } from './menu-pastas.component';

describe('MenuPastasComponent', () => {
  let component: MenuPastasComponent;
  let fixture: ComponentFixture<MenuPastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPastasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
