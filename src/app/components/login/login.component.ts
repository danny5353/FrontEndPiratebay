import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje=null;
  public name: string='null';
   public form = {
    username: null,
    password: null,
  };
  user=null
  password=null
  public error = null;
  submitClicked: number;
  constructor(
    private router: Router,
    private Auth: AuthService,
    )
    { }

    onSubmit() {
      this.mensaje='true';
      this.submitClicked=1;
      this.Auth.login(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  handleResponse(data) {
    this.submitClicked=0;
    alert ("Bienvenido");
    this.router.navigate(["main"]);
    this.Auth.settoken(data.authentication);
    this.Auth.setrefresh(data.refresh);
  }

  handleError(error) {
    alert ("Datos incorrectos intente nuevamente");
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
