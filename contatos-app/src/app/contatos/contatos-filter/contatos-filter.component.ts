import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contatos-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contatos-filter.component.html',
  styleUrls: ['./contatos-filter.component.css']
})
export class ContatosFilterComponent {
  nome: string = '';
  telefone: string = '';
  email: string = '';

  @Output() filtroAplicado = new EventEmitter<{ nome: string; telefone: string; email: string }>();

  aplicarFiltro(): void {
    this.filtroAplicado.emit({
      nome: this.nome,
      telefone: this.telefone,
      email: this.email
    });
  }

  limpar(): void {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.aplicarFiltro();
  }
}
