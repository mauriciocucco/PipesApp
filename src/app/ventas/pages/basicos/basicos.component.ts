import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'mauricio';
  nombreUpper: string = 'MAURICIO';
  nombreCompleto: string = 'MauRIcIo CuCCo';
  fecha: Date = new Date();
}
