import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppCrudAngular';

   constructor (private router:Router){}

  // Listar(){
  //   this.router.navigate(["Listar"])

  // }
  // editar(){
  //   this.router.navigate(["Modificar"])

  // }
  // Nuevo(){
  //   this.router.navigate(["Agregar"])

  // }

}
