import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { Response } from '../Response'

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  // configuracao da url
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  // para poder fazer a requizicao
  constructor(private http: HttpClient) {}

  // para receber dados diferentes que nao sejam so dados normais em si
  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    /*
    post - por estarmos enviando dados
    FormData - é deste FormData que estamos tentando fazer a inserção
    apiUrl - enviando para cá o formData
    */
    return this.http.post<FormData>(this.apiUrl, formData)
  }
}
