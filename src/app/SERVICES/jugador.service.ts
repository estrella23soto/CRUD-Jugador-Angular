import { Injectable } from '@angular/core';

//importamos Http Client 
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  
//creamos la ruta donde esta corriendo el servirdor 
url='/api';

  constructor(private http: HttpClient) { }
  
  // creamos el primer metodo get 
  getJugador()
  {
    return this.http.get(this.url);
  }
  
  //get de un solo equipo 
getUnJugador(_id: string)
{
  return this.http.get(this.url+'/'+_id);
}

// agregar un jugador
addJugador(jugador:Jugador){
return this.http.post(this.url, jugador);
}

//eliminar jugador 
deleteJugador(_id: any){
  return this.http.delete(this.url+'/' +_id);

}
// modificar juagador
editJugador(_id: number, jugador:Jugador){
  return this.http.put(this.url+'/'+_id, jugador);

}


}// termina la llave de la clase 

export interface Jugador{
  _id?:any;
  nombre?:string;
  equipo?:string;
  posicion?:string;
  goles?:number;
  campeonatos?:number;
}

