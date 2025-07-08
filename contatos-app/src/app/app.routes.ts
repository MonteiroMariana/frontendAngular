import { Routes } from '@angular/router';
import { ContatosListComponent } from './contatos/contatos-list/contatos-list.component';
import { ContatosFormComponent } from './contatos/contatos-form/contatos-form.component';
import { HomeComponent } from './home/home.component';
import { ContatosFavoritosComponent } from './contatos/contatos-favoritos/contatos-favoritos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial com cards
  { path: 'contatos', component: ContatosListComponent }, // Lista de contatos
  { path: 'contatos/novo', component: ContatosFormComponent }, // Formulário novo contato
  { path: 'contatos/editar/:id', component: ContatosFormComponent }, // Editar contato
  { path: 'contatos/favoritos', component: ContatosFavoritosComponent }, // Favoritos
  { path: '**', redirectTo: '' } // Redireciona qualquer rota inválida para a Home
];
