import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [ContactCardComponent, ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule, IonicModule, RouterModule
  ],
  exports: [ContactCardComponent, ContactFormComponent]
})
export class ShareComponentModule { }
