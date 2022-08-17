//import { JugadorService } from './../../SERVICES/jugador.service';
import { Component, OnInit } from '@angular/core';
import{Jugador, JugadorService} from '../../SERVICES/jugador.service';
import{Router} from  '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  jugador: Jugador={
    _id: 0,
    nombre:'',
    equipo:'',
    posicion:'',
    goles:0,
    campeonatos:0,
  };

  constructor(private JugadorService:JugadorService, private router:Router) { }

  ngOnInit(): void {
  }

//hacer metodo agregar 
agregar(){
  delete this.jugador._id;
  
  this.JugadorService.addJugador(this.jugador).subscribe();
  this.router.navigate(['/inicio']);
}


}// final 

