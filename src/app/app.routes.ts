import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'alumno',
    pathMatch: 'full',
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then(m => m.AlumnoModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./pages/curso/curso.module').then(m => m.CursoModule)
  }

];
