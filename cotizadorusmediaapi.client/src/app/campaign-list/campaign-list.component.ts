import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
<<<<<<< HEAD
  campaigns: Campaign[] = []; 
=======
  campaigns: Campaign[] = [];
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this.getCampaigns(); 
  }

  getCampaigns(): void { 
    this.campaignService.getCampaigns().subscribe(
      (data: Campaign[]) => { 
        this.campaigns = data; 
        console.log('Data fetched successfully:', data); 
      },
      error => {
        console.error('There was an error fetching the campaigns!', error); 
=======
    this.getCampaigns();
  }

  getCampaigns(): void { // Método público
    this.campaignService.getCampaigns().subscribe(
      data => {
        this.campaigns = data;
        console.log('Data fetched successfully:', data);
      },
      error => {
        console.error('There was an error fetching the campaigns!', error);
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
      }
    );
  }
}



