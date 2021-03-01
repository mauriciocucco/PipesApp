import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Mauricio';
  genero: string = 'masculino';
  //in18Select
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['Maria', 'Carlos', 'Ricardo', 'Susana'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: `tenemos # clientes esperando`,
  };

  //KeyValue
  persona = {
    nombre: 'Mauricio',
    edad: 32,
    direccion: 'Villa Gesell, Argentina',
  };

  //Json
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Batman', vuela: false },
    { nombre: 'Spiderman', vuela: false },
  ];

  //Async
  miObservable = interval(5000);
  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });

  cambiarCliente() {
    this.nombre = 'Gladys';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }
}
