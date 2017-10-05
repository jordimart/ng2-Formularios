import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: "Jorge",
    apellido: "Martínez",
    correo: ""
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
