import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = '/api/campaign';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    console.log('Sending request to API:', this.apiUrl);  // Log para verificar que la función se esté llamando
    return this.http.get<Campaign[]>(this.apiUrl);
  }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.apiUrl, campaign);
  }
}



