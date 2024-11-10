import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactCardComponent],
  imports: [
    CommonModule, FormsModule, IonicModule, RouterModule
  ],
  exports: [ContactCardComponent]
})
export class ContactCardModule { }
