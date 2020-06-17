import { Component, OnInit } from '@angular/core';
import { user } from '../Inteface/user';
import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  token = null;
  users : user[]; 
  constructor(private authService:AuthService, private router:Router ) { 
    this.verificar();
    this.getuser();
  }

  ngOnInit(): void {
  }
  getuser(){
    this.token=this.authService.gettoken();
    console.log(this.token);
    this.authService.getDatos(this.token).subscribe((data: user[]) => {
      this.users = data;
      console.log(data);
    }, err => {
      500
      if(err){
        console.log("Tiempo expirado");
        this.exit();
      }
      console.log(err)
    });

  }
  verificar(){
    this.token=this.authService.gettoken();
    if(this.token){
      console.log("session ok");
    }else{
      this.router.navigate(["login"]);
    }
  }

  exit(){
    this.authService.remove();
    this.router.navigate(["login"]);
  } 
}
