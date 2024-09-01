import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = '/api/campaign';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    console.log('Sending request to API:', this.apiUrl);  // Log para verificar que la función se esté llamando
<<<<<<< HEAD
    return this.http.get<Campaign[]>(this.apiUrl).pipe(
      catchError(this.handleError)  // Manejo de errores
    );
  }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.apiUrl, campaign).pipe(
      catchError(this.handleError)  // Manejo de errores
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('An error occurred:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Devuelve un observable con un mensaje de error para el usuario
    return throwError('Something bad happened; please try again later.');
=======
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.apiUrl, campaign);
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
  }
}



