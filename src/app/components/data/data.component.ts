import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  constructor() {

    this.forma = new FormGroup({
      'nombre': new FormControl('Jorge'),
      'apellido': new FormControl(),
      'email': new FormControl()
    })
  }

  guardarCambios(){
    console.log(this.forma.value)
  }
}
