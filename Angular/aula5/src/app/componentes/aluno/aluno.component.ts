import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../modelos/Aluno';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  // Vetor de alunos
  alunos:Aluno []= [];

  // Formulario
  formulario = new FormGroup({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl('')
  });

  // Construtor
  constructor(private servico:AlunoService){   

  }

  // Apos redenrizar o componente
  ngOnInit(){
    this.servico.selecionar()
    .subscribe(dados => this.alunos = dados);
  }

  // Metodo para cadastrar alunos
  cadastrar():void{
    this.servico.cadastrar(this.formulario.value as Aluno)
    .subscribe(aluno => {
      
      // Cadastrar no vetor de alunos
      this.alunos.push(aluno)

      // Limpar o formulario
      this.formulario.reset();
    });
  }

  // Metodo para remover alunos
  remover(id:number):void{
    this.servico.remover(id)
    .subscribe(() => {

      // Encontrar a posicao do aluno no vetor
      let posicaoAluno = this.alunos.findIndex(obj => {return obj.id === id});

      // Remover do vetor
      this.alunos.splice(posicaoAluno, 1);

    })
  }

}
