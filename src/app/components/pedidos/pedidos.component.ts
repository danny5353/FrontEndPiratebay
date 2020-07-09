
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { user } from '../Inteface/user';
import { tableClient } from '../Inteface/tableClient';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  tableClient : tableClient[];
  order_Id:number;
  username:string;
  payday:string;
  token = null;
  refresh =null;
  users : user[];

  constructor(private authService:AuthService, private router:Router
    ) {
    this.verificar();
    this.getuser();

   }

  ngOnInit(): void {
  }
  Refrezcar(){
    this.refresh=this.authService.getrefresh();
    console.log(this.refresh);
    this.authService.refresh().subscribe(res=>{
      console.log('res:',res);
      let response:any = res;
      this.authService.settoken( response.authentication);
      this.authService.setrefresh( response.refresh);
    },error=>console.error('error:',error));
    
  }
  getuser(){
    this.token=this.authService.gettoken();
    console.log(this.token);
    this.Refrezcar();
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