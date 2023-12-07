import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {

// Importar a classe Route
const rota = new Router;
// Validacao
if(localStorage.getItem('email') == undefined){
  rota.navigateByUrl('/login');
}
  // Retorno
  return true;
};
