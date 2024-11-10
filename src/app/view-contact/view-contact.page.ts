import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { UserFull } from 'src/models/list';
import { ModalController } from '@ionic/angular';
import { ContactFormComponent } from '../share/contact-form/contact-form.component';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})
export class ViewContactPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  contactDetails: UserFull | undefined;

  constructor(public contactService: ContactsService, public modalController: ModalController) {}

  async editContact() {
    if (this.contactDetails) {
      const modal = await this.modalController.create({
        component: ContactFormComponent,
        componentProps: { contactDetails: this.contactDetails }
      });
      await modal.present();
    }
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.contactService.getContactDataById(id).subscribe((data) => {
      this.contactDetails = data;
    });
  }
}
