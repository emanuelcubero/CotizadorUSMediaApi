<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf

import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    CampaignFormComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
=======
    HttpClientModule,
    FormsModule
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
<<<<<<< HEAD
=======

>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
