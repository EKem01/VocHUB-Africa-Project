import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    username: '',
    password: '',
  };
  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }
  onReset(form: NgForm): void {
    form.reset();
  }

  ngOnInit(): void {
  }

}
