import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OPCIONES } from './collection';
import { Opcion } from './opcion';


@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor() { }

  getOpcion(): Observable <Opcion[]>{
    return of(OPCIONES);
  }

}
