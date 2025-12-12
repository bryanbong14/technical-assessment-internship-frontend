import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  // Example endpoints — replace with your real API
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';   // POST example
  private getUrl = 'https://jsonplaceholder.typicode.com/comments'; // GET example

  constructor(private http: HttpClient) { }

  // Simulate sending contact payload to server (POST)
  sendContact(payload: { name: string; email: string; message: string }): Observable<any> {
    // jsonplaceholder returns the created object — useful for demo
    return this.http.post(this.postUrl, {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      createdAt: new Date().toISOString()
    });
  }

  // Example GET to demonstrate fetching recent submissions
  getSubmissions(): Observable<any> {
    // This returns an array of comments — mapped in the component into our display shape
    return this.http.get(this.getUrl + '?_limit=5');
  }
}
