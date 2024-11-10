import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { catchError, map, of } from 'rxjs';
import { ContactsService } from 'src/app/services/contacts.service';
import { CreateUpdateContactData, UserFull } from 'src/models/list';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() contactDetails: UserFull | undefined;

  userForm: FormGroup;

  constructor(
    public contactService: ContactsService,
    public modalController: ModalController
  ) {
    this.userForm = new FormGroup({
      title: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gender: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      dateOfBirth: new FormControl(''),
      location: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
      }),
      picture: new FormControl(''),
    });
  }

  private initializeForm() {
    if (this.contactDetails) {
      this.userForm.setValue({
        title: this.contactDetails.title ?? '',
        firstName: this.contactDetails.firstName ?? '',
        lastName: this.contactDetails.lastName ?? '',
        gender: this.contactDetails.gender ?? '',
        email: this.contactDetails.email ?? '',
        phone: this.contactDetails.phone ?? '',
        dateOfBirth: this.contactDetails.dateOfBirth ?? '',
        location: {
          street: this.contactDetails.location?.street ?? '',
          city: this.contactDetails.location?.city ?? '',
          country: this.contactDetails.location?.country ?? '',
        },
        picture: this.contactDetails.picture ?? '',
      });
    }
  }

  saveFunction = () => {
    const contactData = this.userForm.value as CreateUpdateContactData;
    if(this.contactDetails) {
      this.contactService.updateContactData(this.contactDetails.id, contactData)
      this.closeModal()
    } else {
      this.contactService.createContactData(contactData).pipe(
        map((response: any) => console.log(response)),
        catchError((error: any) => {
          console.log(error);
          return of(null);
        })
      );
      console.log('userForm');
      console.log(this.userForm);
    }

  };

  closeModal() {
    this.modalController.dismiss();
    console.log(this.userForm.value.firstName);
  }

  ngOnInit() {
    if (this.contactDetails) {
      this.initializeForm();
    }
  }
}
