import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/campaigns', pathMatch: 'full' }, // Ruta predeterminada redirige a la lista de campañas
  { path: 'campaigns', component: CampaignListComponent },   // Ruta para la lista de campañas
  { path: 'create-campaign', component: CampaignFormComponent } // Ruta para crear una nueva campaña
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
