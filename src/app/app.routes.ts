import { Routes } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Libra.me',
    component: BibliotecaComponent,
  },
  {
    path: 'formulario',
    title: 'Envie Seu Livro',
    component: FormularioComponent,
  }
];
