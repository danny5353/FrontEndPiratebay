import { Component, OnInit } from '@angular/core';
import { user } from '../Inteface/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos2',
  templateUrl: './pedidos2.component.html',
  styleUrls: ['./pedidos2.component.css']
})
export class Pedidos2Component implements OnInit {
  token = null;
  users : user[];
  constructor(private authService:AuthService, private router:Router) { 
    this.verificar();
    this.getuser();
  }
  ngOnInit(): void {
  
  }
  getuser(){
    this.token=this.authService.gettoken();
   console.log(this.token);

    this.token=this.authService.gettoken();
    this.authService.getDatos(this.token);
    this.authService.getDatos(this.token).subscribe((response) => {
      console.log('datos: ', response);
  });
     this.authService.getDatos(this.token).subscribe((data: user[]) => {
      this.users = data;
      console.log(data);
    });
  }
  exit(){
    this.authService.remove();
    this.router.navigate(["login"]);
  }
  verificar(){
    this.token=this.authService.gettoken();
    if(this.token){
      console.log("session ok");
    }else{
      this.router.navigate(["login"]);
    }
  }
} 