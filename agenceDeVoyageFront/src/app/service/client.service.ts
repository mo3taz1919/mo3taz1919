import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly apiUrl= ' http://localhost:8089/Client';
  constructor(private http: HttpClient) { }
  getClientList():Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl +'/get/');
  }
  getNom(id:number):Observable<Client>{
    return this.http.get<Client>(this.apiUrl+'/getNom/'+id);
  }
  onCreate( nom, prenom,mail){
    const obj = {
      "nom": nom,
      "prenom": prenom, 
      "mail": mail
         };
         
   return  this.http.post(`${this.apiUrl}/add`, obj);
  }
  onDelete(id:number){
    return this.http.delete(this.apiUrl+'/delete/'+id);
  }
  onEdit(id, nom, prenom,mail){
    const obj = {
      "id" :id,
      "nom": nom,
      "prenom": prenom, 
      "mail": mail
         };
    return this.http.put(`${this.apiUrl}/edit`, obj);
  }
}
