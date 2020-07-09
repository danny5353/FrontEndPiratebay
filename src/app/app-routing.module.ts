import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { Pedidos2Component } from "./components/pedidos2/pedidos2.component";
import { PedidosComponent  } from "./components/pedidos/pedidos.component";
const Routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'gestion',
    component: GestionComponent,
  },
  {
    path: 'pedidos2',
    component: Pedidos2Component,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
