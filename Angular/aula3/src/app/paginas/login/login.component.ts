import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Construtor
  constructor(private rota:Router){}

  // Formulario
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  // Funcao para autenticar
  autenticar():void{
    if(
      this.formulario.value.email === 'sr.marxelias@gmail.com' 
      &&
      this.formulario.value.senha === '123'
    ){
      // Adicionar o email no localStorage
      localStorage.setItem('email', this.formulario.value.email);
      // Redirecionamento
      this.rota.navigateByUrl('/admin');
    }else{
      alert('E-mail ou senha incorretos.');
    }
  }

}


