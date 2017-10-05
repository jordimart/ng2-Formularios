import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
    // .ng-invalid.ng-touched:not(form){
    //   border:1px solid red;
    }

    `
  ]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null
  }

  constructor() { }

  ngOnInit() {
  }

  guardar( forma:any ){
    console.log("ngForm", forma );
    console.log("Valor", forma.value );
    console.log("Usuario", this.usuario)

  }

}
