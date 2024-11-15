import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUpdateContactData, List, UserFull } from 'src/models/list';

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

  getContactDataById(id: string) {
    return this.httpClient.get<UserFull>(`${environment.userUrl}/${id}`, {headers}).pipe(
      map((data: UserFull) => data)
    )
  }

  createContactData(contactData: CreateUpdateContactData) {
    return this.httpClient.post<UserFull>(`${environment.userUrl}/create`, contactData, {headers}).pipe(
      map(data => data),
      catchError((error: any) => {
        console.log(error)
        return of(null)
      })
    )
  }

  updateContactData(id: string, updatedContactData: CreateUpdateContactData) {
    return this.httpClient.put<UserFull>(`${environment.userUrl}/${id}`, updatedContactData, {headers}).pipe(
      map(data => data),
      catchError((error: any) => {
        console.log(error)
        return of(null)
      })
    )
  }
}
