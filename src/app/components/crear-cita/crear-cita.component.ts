import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';

  fomularioIncorrecto= false;//no funciona..deberia no aparecer
  constructor() { }

  ngOnInit(): void {
  }

}
