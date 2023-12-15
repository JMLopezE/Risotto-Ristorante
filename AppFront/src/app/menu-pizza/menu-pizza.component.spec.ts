import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPizzaComponent } from './menu-pizza.component';

describe('MenuPizzaComponent', () => {
  let component: MenuPizzaComponent;
  let fixture: ComponentFixture<MenuPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
