import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { Contato } from '../contato.model';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatos-favoritos',
  standalone: true,  // importante para usar 'imports' no componente
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './contatos-favoritos.component.html',
  styleUrls: ['./contatos-favoritos.component.css']
})
export class ContatosFavoritosComponent implements OnInit {
  contatosFavoritos: Contato[] = [];

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.carregarFavoritos();
  }

  carregarFavoritos(): void {
    this.contatosService.listarFavoritos().subscribe(favoritos => {
      this.contatosFavoritos = favoritos;
    });
  }

  removerFavorito(contato: Contato): void {
    contato.favorito = false;
    this.contatosService.atualizar(contato).subscribe(() => {
      // Atualiza a lista local para remover o contato desmarcado como favorito
      this.contatosFavoritos = this.contatosFavoritos.filter(c => c.id !== contato.id);
    });
  }
}
