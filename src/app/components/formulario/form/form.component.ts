import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  public bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    isbn: new FormControl('', [Validators.minLength(4), Validators.required]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  validadorTitulo(){
    if(!this.bookForm.get('name')?.valid){
      document.getElementById('titulo')?.classList.remove('none');
      document.getElementById('titulo')?.classList.add('error');
    } else {
      document.getElementById('titulo')?.classList.remove('error');
      document.getElementById('titulo')?.classList.add('none');
    }
  }
  validadorIsbn(){
    if(!this.bookForm.get('isbn')?.valid){
      document.getElementById('isbn')?.classList.remove('none');
      document.getElementById('isbn')?.classList.add('error');
    } else {
      document.getElementById('isbn')?.classList.remove('error');
      document.getElementById('isbn')?.classList.add('none');
    }
  }
  validadorAuthor(){
    if(!this.bookForm.get('author')?.valid){
      document.getElementById('author')?.classList.remove('none');
      document.getElementById('author')?.classList.add('error');
    } else {
      document.getElementById('author')?.classList.remove('error');
      document.getElementById('author')?.classList.add('none');
    }
  }
  public submit(){
    if(this.bookForm.valid){
      
    }
  }
}
