import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';

interface Books {
  author: any;
  image: any;
  isbn: any;
  nome: any;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public name = signal('Matheus');
  #http = inject(HttpClient);
  #url = signal('https://lib-me-default-rtdb.firebaseio.com/:livros.json');

  #setListBook = signal<Books[] | null>(null);
  public getBook = this.#setListBook.asReadonly();

  public httpBooks$(): Observable<Books[]> {
    return this.#http.get<Books[]>(this.#url())
  }

  //create
  #setBookCreate = signal<Books[] | null>(null);
  get getBookCreate(){
    return this.#setBookCreate.asReadonly();
  }
  public httpBookCreate$(author: any, image: any, isbn: any, nome: any): Observable<Books[]>{
    return this.#http.post<Books[]>(this.#url(), {author, image, isbn, nome}).pipe(shareReplay(),
    tap((res) => this.#setBookCreate.set(res)))
  }

  #setBookDelete = signal<Books[] | null>(null);
  get getBookDelete(){
    return this.#setBookDelete.asReadonly();
  }
  public httpBookDelete$(): Observable<void>{
    return this.#http.delete<void>(this.#url(), {}).pipe(shareReplay())
  }

}
