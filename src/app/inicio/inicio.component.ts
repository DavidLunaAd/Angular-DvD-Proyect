import { Component, OnInit } from '@angular/core';
import { Opcion } from '../opcion';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
