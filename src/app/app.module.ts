import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HttpClient } from '@angular/common/http';
import { GestionComponent } from './components/gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GestionComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
