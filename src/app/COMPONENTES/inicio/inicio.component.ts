//import { JugadorService } from './../../SERVICES/jugador.service';

import { Component, OnInit } from '@angular/core';
import{ JugadorService, Jugador} from '../../SERVICES/jugador.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  //variable 
  ListarJugador: Jugador[];
  constructor(private JugadorService:JugadorService, private router:Router ) 
  {
    this.ListarJugador = [];
  }



  ngOnInit(): void {
    this.listarJuagadores();
  }

  //CREAMOS UN METODO PARA LLAAR EL METODO GET DEL SERVICIO 
  listarJuagadores(){
    this.JugadorService.getJugador().subscribe(
      res=>{
        console.log(res);
        this.ListarJugador=<any>res;
      },
      err=>console.log(err)
      
    );
  }
  //creacion del evento 
Eliminar(_id:number){
  this.JugadorService.deleteJugador(_id).subscribe(
    res=>{
      console.log('jugador eliminado')
      this.listarJuagadores();
  },
  err=> console.log(err)
  
  );
}
//creacion del modulo modificar 
modificar(_id:number){
this.router.navigate(['modificar/:_id'+_id]);
}
}// termina llave del docuemento 
