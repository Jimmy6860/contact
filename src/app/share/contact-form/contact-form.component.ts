import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { ContactsService } from 'src/app/services/contacts.service';
import { CreateContactData } from 'src/models/list';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  userForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    dateOfBirth: new FormControl(''),
    location: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    }),
    picture: new FormControl(''),
  });

  constructor(public contactService: ContactsService) {}

  saveFunction = () => {
    const contactData = this.userForm.value as CreateContactData;
    this.contactService.createContactData(contactData).pipe(
      map((response: any) => console.log(response)),
      catchError((error: any) => {
        console.log(error)
        return of(null)
      })
    );

    console.log('userForm');
    console.log(this.userForm);
  };

  ngOnInit() {}
}
