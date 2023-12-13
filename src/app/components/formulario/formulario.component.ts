import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LivrosComponent } from '../../biblioteca/livros/livros.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormComponent, LivrosComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
