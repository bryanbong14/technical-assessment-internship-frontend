import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sendForm(data: any): Observable<any> {
    console.log('Form submitted:', data);
    return of({ success: true, received: data }).pipe(delay(1000));
  }
}
