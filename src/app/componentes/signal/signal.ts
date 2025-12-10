import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  // Expliaccion
  // declaracion
  // alumno = signal<Type>(inicialValue)
  // alumno = signal<string>(Roberto)

  // ver que tiene
  // alumno(); => devuelve Roberto

  // setting o asignacion
  // alumno.set(nuevoValor)
  // alumno.set("Laura")
  // alumno() => devuelve Laura

  // actualizacion del valor
  //alumno.update(nuevoValor)
  //alumno.update(Laura Hernandez)

  count = signal<number>(0)

  incrementar() {
    this.count.update(n => n + 1)
  }
  decrementar() {
    this.count.update(n => n - 1)
  }


  price = signal<number>(100)
  iva = computed(()=> this.price() * 0.21);
  total = computed(()=> this.price() + this.iva())

  subir(){
    this.price.update(p => p +10)
  }


  clicks = signal<number>(0)
  constructor(){
    effect(()=>{
      console.log('Nuevo Valor', this.clicks())
    })
  }

  add(){
    this.clicks.update(c=>c +1)
  }






}
