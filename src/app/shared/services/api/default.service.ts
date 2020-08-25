import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DefaultService {

  readonly API_URL: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  getApiMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.API_URL}/nodes`);
  }
}
