import { Component } from '@angular/core';
import { LivrosComponent } from '../../biblioteca/livros/livros.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [LivrosComponent, RouterLink],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {

}
