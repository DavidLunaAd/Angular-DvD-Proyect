import { Component, OnInit } from '@angular/core';
import { Opcion } from '../opcion';
import { OptionsService } from '../options.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  opciones!: Opcion[];
  opcionSeleccionada!:Opcion;

  constructor(private optionsService:OptionsService) {
    console.log("---Componente Aboutme creado ---");
  }

  // Metodo asincrono
  getOpciones():void{
    this.optionsService.getOpcion().subscribe(opciones=>this.opciones=opciones);

  }

  ngOnInit(): void {
    console.log(" ---Componente Aboutme[ngOnInit] ---");
    this.getOpciones();
  }

  onSelectedOpcion(opcion:Opcion):void{
    console.log("Opcion Seleccionada= "+opcion.id);
    this.opcionSeleccionada=opcion;
  }

}
