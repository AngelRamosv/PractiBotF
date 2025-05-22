import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'formulario',
    loadComponent: () => import('./formulario/formulario.page').then( m => m.FormularioPage)
  },
  {
    path: 'temario',
    loadComponent: () => import('./temario/temario.page').then( m => m.TemarioPage)
  },
  {
    path: 'introduccion',
    loadComponent: () => import('./temario/introduccion/introduccion.page').then( m => m.IntroduccionPage)
  },
  {
    path: 'identificadores',
    loadComponent: () => import('./temario/introduccion/identificadores/identificadores.page').then( m => m.IdentificadoresPage)
  },
  {
    path: 'ejercicios',
    loadComponent: () => import('./temario/introduccion/identificadores/ejercicios/ejercicios.page').then( m => m.EjerciciosPage)
  },
  {
    path: 'miprogreso',
    loadComponent: () => import('./temario/miprogreso/miprogreso.page').then( m => m.MiprogresoPage)
  },
  {
    path: 'variables',
    loadComponent: () => import('./temario/introduccion/variables/variables.page').then( m => m.VariablesPage)
  },
  {
    path: 'tipos-datos-simples',
    loadComponent: () => import('./temario/introduccion/tipos-datos-simples/tipos-datos-simples.page').then( m => m.TiposDatosSimplesPage)
  },
  {
    path: 'operadores',
    loadComponent: () => import('./temario/introduccion/operadores/operadores.page').then( m => m.OperadoresPage)
  },
];
