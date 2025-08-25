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
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'formulario',
    loadComponent: () => import('./formulario/formulario.page').then(m => m.FormularioPage)
  },
  {
    path: 'temario',
    loadComponent: () => import('./temario/temario.page').then(m => m.TemarioPage)
  },
  {
    path: 'introduccion',
    loadComponent: () => import('./temario/introduccion/introduccion.page').then(m => m.IntroduccionPage)
  },
  {
    path: 'identificadores',
    loadComponent: () => import('./temario/introduccion/identificadores/identificadores.page').then(m => m.IdentificadoresPage)
  },
  {
    path: 'ejercicios',
    loadComponent: () => import('./temario/introduccion/identificadores/ejercicios/ejercicios.page').then(m => m.EjerciciosPage)
  },
  {
    path: 'miprogreso',
    loadComponent: () => import('./temario/miprogreso/miprogreso.page').then(m => m.MiprogresoPage)
  },
  {
    path: 'variables',
    loadComponent: () => import('./temario/introduccion/variables/variables.page').then(m => m.VariablesPage)
  },
  {
    path: 'tipos-datos-simples',
    loadComponent: () => import('./temario/introduccion/tipos-datos-simples/tipos-datos-simples.page').then(m => m.TiposDatosSimplesPage)
  },
  {
    path: 'operadores',
    loadComponent: () => import('./temario/introduccion/operadores/operadores.page').then(m => m.OperadoresPage)
  },
  {
    path: 'ejerciciosv',
    loadComponent: () => import('./temario/introduccion/variables/ejerciciosv/ejerciciosv.page').then(m => m.EjerciciosvPage)
  },
  {
    path: 'ejerciciost',
    loadComponent: () => import('./temario/introduccion/tipos-datos-simples/ejerciciost/ejerciciost.page').then(m => m.EjerciciostPage)
  },
  {
    path: 'ejercicioso',
    loadComponent: () => import('./temario/introduccion/operadores/ejercicioso/ejercicioso.page').then(m => m.EjerciciosoPage)
  },
  {
    path: 'arreglos',
    loadComponent: () => import('./temario/arreglos/arreglos.page').then(m => m.ArreglosPage)
  },
  {
    path: 'introduccion_a',
    loadComponent: () => import('./temario/arreglos/introduccion_a/introduccion.page').then(m => m.IntroduccionPage)
  },
  {
    path: 'tipos',
    loadComponent: () => import('./temario/arreglos/tipos/tipos.page').then(m => m.TiposPage)
  },
  {
    path: 'arreglos-funciones',
    loadComponent: () => import('./temario/arreglos/arreglos-funciones/arreglos-funciones.page').then(m => m.ArreglosFuncionesPage)
  },
  {
    path: 'string',
    loadComponent: () => import('./temario/arreglos/string/string.page').then(m => m.StringPage)
  },
  {
    path: 'string-funciones',
    loadComponent: () => import('./temario/arreglos/string-funciones/string-funciones.page').then(m => m.StringFuncionesPage)
  },
  {
    path: 'arreglo-registros',
    loadComponent: () => import('./temario/arreglos/arreglo-registros/arreglo-registros.page').then(m => m.ArregloRegistrosPage)
  },
  {
    path: 'ejerciciosi',
    loadComponent: () => import('./temario/arreglos/introduccion_a/ejerciciosi/ejerciciosi.page').then(m => m.EjerciciosiPage)
  },
  {
    path: 'tipos',
    loadComponent: () => import('./temario/arreglos/tipos/tipos.page').then(m => m.TiposPage)
  },
  {
    path: 'ejerciciosti',
    loadComponent: () => import('./temario/arreglos/tipos/ejerciciosti/ejerciciost.page').then(m => m.EjerciciostPage)
  },
  {
    path: 'arreglos-funciones',
    loadComponent: () => import('./temario/arreglos/arreglos-funciones/arreglos-funciones.page').then( m => m.ArreglosFuncionesPage)
  },
  {
    path: 'ejerciciosarray',
    loadComponent: () => import('./temario/arreglos/arreglos-funciones/ejerciciosarray/ejerciciosarray.page').then( m => m.EjerciciosarrayPage)
  },
  {
    path: 'string',
    loadComponent: () => import('./temario/arreglos/string/string.page').then( m => m.StringPage)
  },
  {
    path: 'ejercicio-string',
    loadComponent: () => import('./temario/arreglos/string/ejercicio-string/ejercicio-string.page').then( m => m.EjercicioStringPage)
  },
  {
    path: 'string-funciones',
    loadComponent: () => import('./temario/arreglos/string-funciones/string-funciones.page').then( m => m.StringFuncionesPage)
  },
  {
    path: 'ejercicios-sf',
    loadComponent: () => import('./temario/arreglos/string-funciones/ejercicios-sf/ejercicios-sf.page').then( m => m.EjerciciosSFPage)
  },

];
