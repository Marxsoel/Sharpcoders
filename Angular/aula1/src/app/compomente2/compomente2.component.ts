import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compomente2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compomente2.component.html',
  styleUrl: './compomente2.component.css'
})
export class Compomente2Component {
    // Exibir texto
    exibirTexto:boolean = true;

    // Funcao para exibir ou ocultar o texto
    visibilidadeTexto():void{
      this.exibirTexto = !this.exibirTexto;
    }

    // Lista de nomes
    nomes:string[] =['Larissa', 'Ricardo', 'Cleber', 'VIviane']

    // Linguagem de programacao
    linguagem:string = 'C#';

    // Funcao para alterar a linguagem
    alterarLinguagem():void{
      alert("Funcionou");
    }

}
