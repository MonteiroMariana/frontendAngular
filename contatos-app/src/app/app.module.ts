// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

// Componentes (todos standalone)
import { AppComponent } from './app.component';
import { HomeComponent } from './contatos/home/home.component';

import { ContatosFavoritosComponent } from './contatos/contatos-favoritos/contatos-favoritos.component';
import { ContatosFilterComponent } from './contatos/contatos-filter/contatos-filter.component';
import { ContatosFormComponent } from './contatos/contatos-form/contatos-form.component';
import { ContatosListComponent } from './contatos/contatos-list/contatos-list.component';

// Serviço
import { ContatosService } from './contatos/contatos.service';

// Rotas
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: ContatosListComponent },
  { path: 'contatos/novo', component: ContatosFormComponent },
  { path: 'contatos/editar/:id', component: ContatosFormComponent },
  { path: 'contatos/favoritos', component: ContatosFavoritosComponent }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),


    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,


    ContatosFavoritosComponent,
    ContatosFilterComponent,
    ContatosFormComponent,
    ContatosListComponent,AppComponent,
    HomeComponent
  ],
  providers: [ContatosService],
  
})
export class AppModule { }
