import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private api = 'https://javacontato.duckdns.org/contatos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.api);
  }
  listarFavoritos(): Observable<Contato[]> {
  return this.http.get<Contato[]>(`${this.api}/favoritos`);
}


  salvar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.api, contato);
  }

  atualizar(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.api}/${contato.id}`, contato);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
