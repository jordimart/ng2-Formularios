import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;
  usuario: Object = {
    nombrecompleto: {
      nombre: "Jorge",
      apellido: "Martínez"
    },
    email: "jordimart83@gmail.com",
    pasatiempos: ["Correr", "Dormir", "Caminar"]
  }

  constructor() {

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required,
          this.noHerrera
        ])
      }),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    })

    // this.forma.setValue( this.usuario);
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   email: ""
    // });
  }

  agregarPasatiempo() {
    console.log('agrega');
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noHerrera(control: FormControl): { [s: string]: boolean } {

    if (control.value === "herrera") {
      return {
        noherrera: true
      }
    }
    return null;
  }
}
