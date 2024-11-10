import { Component, inject } from '@angular/core';
import { ModalController, RefresherCustomEvent } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { ContactsService } from '../services/contacts.service';
import { UserPreview } from 'src/models/list';
import { ContactFormComponent } from '../share/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  contacts: UserPreview[] = [];
  constructor(public contactService: ContactsService, public modalController: ModalController) {}

  async openContactForm() {
    const modal = await this.modalController.create({
      component: ContactFormComponent,
    });
    await modal.present();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit() {
    this.contactService.getContactsData().subscribe(
      data => {
        this.contacts = data.data;
      }
    )
  }
}
