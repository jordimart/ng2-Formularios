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

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }]

  sexos:string[] = ["Hombre","Mujer", "Otros"]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: any) {
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
    console.log("Usuario", this.usuario)

  }

}
