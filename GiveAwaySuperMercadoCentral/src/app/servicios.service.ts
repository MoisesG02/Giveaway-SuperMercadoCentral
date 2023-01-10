import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(public http: HttpClient) { 

  }
  ganadores(item:any){

  return this.http.post('http://10.0.0.204/rifa/ganador.php',item)

  }
}
