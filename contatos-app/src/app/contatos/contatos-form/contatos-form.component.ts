import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewEncapsulation } from '@angular/core';

import { ContatosService } from '../contatos.service';
import { Contato } from '../contato.model';

@Component({
  selector: 'app-contatos-form',
  standalone: true,
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './contatos-form.component.html',
  styleUrls: ['./contatos-form.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ContatosFormComponent implements OnInit {

  form!: FormGroup;
  contatoId?: number;

  categorias = ['Família', 'Trabalho', 'Escola', 'Outros'];

  constructor(
    private fb: FormBuilder,
    private service: ContatosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      apelido: [''],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: [''],
      dataNascimento: [''],
      categoria: [''],
      redeSocial: [''],
      observacoes: [''],
      favorito: [false]
    });

    this.contatoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.contatoId) {
      this.service.listar().subscribe(contatos => {
        const contato = contatos.find(c => c.id === this.contatoId);
        if (contato) {
          this.form.patchValue(contato);
        }
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) return;

    console.log('Formulário:', this.form.value);

    const contato: Contato = this.form.value;
    if (this.contatoId) {
      contato.id = this.contatoId;
      this.service.atualizar(contato).subscribe(() => this.router.navigate(['/contatos']));
    } else {
      this.service.salvar(contato).subscribe(() => this.router.navigate(['/contatos']));
    }
  }
}
