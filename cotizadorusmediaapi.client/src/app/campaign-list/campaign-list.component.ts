import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: Campaign[] = []; 

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
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
      }
    );
  }
}



