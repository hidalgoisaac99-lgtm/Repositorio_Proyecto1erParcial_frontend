import {Component} from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  standalone: true,
  templateUrl: './encabezado.html',
  styleUrls: ['./encabezado.css']
})
export class Encabezado {
  titulo: string = 'Sistema de gestion de cursos en Angular';
  subtitulo: string = 'Proyecto primer parcial';
}