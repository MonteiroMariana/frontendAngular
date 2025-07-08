import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ContatosService } from '../contatos.service';
import { Contato } from '../contato.model';

import { ContatosFilterComponent } from '../contatos-filter/contatos-filter.component';

@Component({
  selector: 'app-contatos-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ContatosFilterComponent
  ],
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.css']
})
export class ContatosListComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos(): void {
    this.contatosService.listar().subscribe({
      next: (dados: Contato[]) => this.contatos = dados,
      error: (erro: any) => console.error('Erro ao listar contatos', erro)
    });
  }

  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.contatosService.deletar(id).subscribe(() => {
        this.carregarContatos();
      });
    }
  }

  filtrarContatos(filtro: { nome: string; telefone: string; email: string }): void {
    this.contatosService.listar().subscribe({
      next: (dados: Contato[]) => {
        this.contatos = dados.filter(c =>
          (!filtro.nome || c.nome.toLowerCase().includes(filtro.nome.toLowerCase())) &&
          (!filtro.telefone || c.telefone.includes(filtro.telefone)) &&
          (!filtro.email || c.email.toLowerCase().includes(filtro.email.toLowerCase()))
        );
      },
      error: (erro: any) => console.error('Erro ao filtrar', erro)
    });
  }

  alternarFavorito(contato: Contato): void {
    const atualizado = { ...contato, favorito: !contato.favorito };
    this.contatosService.atualizar(atualizado).subscribe(() => {
      this.carregarContatos();
    });
  }
}
