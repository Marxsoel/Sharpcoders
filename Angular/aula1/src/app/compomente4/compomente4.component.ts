import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compomente4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compomente4.component.html',
  styleUrl: './compomente4.component.css'
})
export class Compomente4Component {

  // Variavel para armazenar um texto
  texto:string = 'Hello';

  // Variaveis para armazenar os inputs do formulario
  email:string = '';
  senha:string = '';
  
}
