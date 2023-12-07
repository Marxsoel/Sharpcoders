import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-compomente1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compomente1.component.html',
  styleUrl: './compomente1.component.css'
})
export class Compomente1Component {

  // Variável
  texto:string = 'Hello World!';

  // Objeto
  pessoa:any = {
    'nome': 'Julio',
    'idade': 36
  };

}
