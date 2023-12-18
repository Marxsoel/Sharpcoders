import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../modelos/Postagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  // Construtor
  constructor(private http:HttpClient) { }

  // URLs
  private urlPostagem:string = 'https://jsonplaceholder.typicode.com/posts';

  // Medodo para retornar todas as postagens
  listarPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.urlPostagem);
  }

  // Observable: Executa requisicoes em periodos de tempo
  // Subscriber: Recebe o retorno das requisicoes
}
