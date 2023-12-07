import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Compomente1Component } from "./compomente1/compomente1.component";
import { Compomente2Component } from './compomente2/compomente2.component';
import { Compomente3Component } from './compomente3/compomente3.component';
import { Compomente4Component } from './compomente4/compomente4.component';
import { Componente5Component } from './componente5/componente5.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, Compomente1Component, Compomente2Component, Compomente3Component, Compomente4Component, Componente5Component]
})
export class AppComponent {
  title = 'aula1';
}
