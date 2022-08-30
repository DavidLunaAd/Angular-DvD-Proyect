import { Component, Input, OnInit } from '@angular/core';
import { Opcion } from '../opcion';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() opcion!: Opcion;

  constructor() { }

  ngOnInit(): void {
  }

}
