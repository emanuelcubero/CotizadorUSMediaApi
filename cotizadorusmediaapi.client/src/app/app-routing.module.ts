import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/campaigns', pathMatch: 'full' }, // Ruta predeterminada redirige a la lista de campañas
  { path: 'campaigns', component: CampaignListComponent },   // Ruta para la lista de campañas
  { path: 'create-campaign', component: CampaignFormComponent } // Ruta para crear una nueva campaña
];
=======

const routes: Routes = [];
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
