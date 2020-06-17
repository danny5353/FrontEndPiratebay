
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { user } from '../Inteface/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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