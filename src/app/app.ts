import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule ,FormGroup,FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('reactive-forms');

  signupform =new FormGroup({
    name:new FormControl(''),
    age:new FormControl(''),
    email:new FormControl(''),
  })

}
