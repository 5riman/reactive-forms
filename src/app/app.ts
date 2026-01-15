import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule ,FormGroup,FormControl,Validators} from '@angular/forms';
import { CommonModule } from "@angular/common";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('reactive-forms');

  signupform =new FormGroup({
    name:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
  })
  onsubmit(){
  console.log(this.signupform.value)
}
get P(){
  return this.signupform.controls
}
}

