import { Component, OnInit, inject, signal } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css',
})
export class LivrosComponent implements OnInit {
  #apiService = inject(ServiceService);
  public getBook = signal<null | Array<{
    author: any;
    image: any;
    isbn: any;
    nome: any;
  }>>(null);

  ngOnInit(): void {
    this.#apiService.httpBooks$().subscribe({
      next: (next) => {
        this.getBook.set(next);
        console.log(next);
      },
    });
  }

  public httpBookDelete(){
    return this.#apiService.httpBookDelete$().pipe(concatMap(()=>this.#apiService.httpBooks$())).subscribe();
  }
}
