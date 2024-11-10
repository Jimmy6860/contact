import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from 'src/models/list';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'app-id': '62a040dc29e7d125231500c1'
});


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(public httpClient: HttpClient) { }

  getContactsData() {
    return this.httpClient.get<List>(environment.userUrl, {headers}).pipe(
      map((data: List) => data)
    )
  }
}
