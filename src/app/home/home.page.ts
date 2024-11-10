import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { ContactsService } from '../services/contacts.service';
import { UserPreview } from 'src/models/list';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  contacts: UserPreview[] = [];
  constructor(public contactService: ContactsService) {}

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
