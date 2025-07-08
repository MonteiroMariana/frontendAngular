import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosFilterComponent } from './contatos-filter.component';

describe('ContatosFilterComponent', () => {
  let component: ContatosFilterComponent;
  let fixture: ComponentFixture<ContatosFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
