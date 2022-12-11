import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  servicosUrl = 'https://luis-tcc-mewtwo.free.beeceptor.com/clientes';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.servicosUrl}`);
  }
}
