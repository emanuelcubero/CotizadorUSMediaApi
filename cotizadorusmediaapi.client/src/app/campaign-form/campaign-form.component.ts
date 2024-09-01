import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html'
})
export class CampaignFormComponent {
<<<<<<< HEAD
  @Output() campaignCreated = new EventEmitter<void>(); 


=======
  @Output() campaignCreated = new EventEmitter<void>(); // Evento que se emitirá cuando se cree una campaña
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
  newCampaign: Campaign = {
    id: 0,
    vendedor: '',
    cliente: '',
<<<<<<< HEAD
    campania: '', 
    anunciante: '',
    plataforma: 'Vevo',
    inversion: 0, 
=======
    campania: '',
    anunciante: '',
    plataforma: 'Vevo',
    inversion: 0,
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
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
<<<<<<< HEAD
          this.campaignCreated.emit(); 
=======
          this.campaignCreated.emit(); // Emitir evento después de crear la campaña
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
        },
        error => {
          console.error('Error creating campaign!', error);
        }
      );
    }
  }
}

