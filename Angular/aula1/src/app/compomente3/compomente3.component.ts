import { Component } from '@angular/core';

@Component({
  selector: 'app-compomente3',
  standalone: true,
  imports: [],
  templateUrl: './compomente3.component.html',
  styleUrl: './compomente3.component.css'
})
export class Compomente3Component {

  // Variável de média
  media:number = 8;
  
  // <!-- Variável de linguagem -->
  linguagem:string = 'html';

  // Vetor de nomes
  nomes:string[] = ['Marxsoel', 'Lorayne', 'Abigail', 'Amora'];
}

