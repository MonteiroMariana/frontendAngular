import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosFavoritosComponent } from './contatos-favoritos.component';

describe('ContatosFavoritosComponent', () => {
  let component: ContatosFavoritosComponent;
  let fixture: ComponentFixture<ContatosFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
