import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html'
})
export class CampaignFormComponent {
  @Output() campaignCreated = new EventEmitter<void>(); // Evento que se emitirá cuando se cree una campaña
  newCampaign: Campaign = {
    id: 0,
    vendedor: '',
    cliente: '',
    campania: '',
    anunciante: '',
    plataforma: 'Vevo',
    inversion: 0,
    unidades: 0,
    margen: 0
  };

  constructor(private campaignService: CampaignService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.campaignService.createCampaign(this.newCampaign).subscribe(
        response => {
          console.log('Campaign created successfully!', response);
          form.resetForm();
          this.campaignCreated.emit(); // Emitir evento después de crear la campaña
        },
        error => {
          console.error('Error creating campaign!', error);
        }
      );
    }
  }
}

