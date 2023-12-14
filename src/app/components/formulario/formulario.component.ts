import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LivrosComponent } from '../../biblioteca/livros/livros.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormComponent, LivrosComponent, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
