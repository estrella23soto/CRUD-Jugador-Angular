import { Component, OnInit } from '@angular/core';
import{Jugador, JugadorService} from '../../SERVICES/jugador.service';
import{Router, ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  jugador: Jugador={
    _id: 0,
    nombre:'',
    equipo:'',
    posicion:'',
    goles:0,
    campeonatos:0,
  };

  constructor(private JugadorService:JugadorService,
     private router:Router,
     private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada =<string>this.activeRoute.snapshot.params['_id'];
    console.log('id de entrada: '+ id_entrada);
    if(id_entrada){
      this.JugadorService.getUnJugador(id_entrada).subscribe(
        res=>{
          // @ts-ignore
          this.jugador = number = res[0];
          // @ts-ignore
          console.log(res[0]);
        },
        err=>{
          console.log(err)
        }
      );
    }
  }
  modificar(){

    this.JugadorService.editJugador(this.jugador._id, this.jugador).subscribe(
      res=>{
        console.log(res);
        
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio']);

  }
  
}
