import { Component } from '@angular/core';
import { LivrosComponent } from '../../biblioteca/livros/livros.component';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [LivrosComponent],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {

}
