import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BibliotecaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libra-me';
}
