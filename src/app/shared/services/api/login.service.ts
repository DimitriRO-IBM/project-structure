import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly FILE_URL: string = 'http://ymsoft.fr/SACR/Ferrero';

  constructor(
    private http: HttpClient,
  ) {
  }

  getCsvAsHtml(): Observable<string> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append(
      'Accept',
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8\'',
    );
    return this.http.get(`${this.FILE_URL}.htm`, { headers, responseType: 'text' });
  }

  getCsvAsFile(): Observable<Blob> {
    const options: {} = {
      responseType: 'blob',
      headers: new HttpHeaders().append('Accept', '*'),
    };
    return this.http.get<Blob>(`${this.FILE_URL}.csv`, options);
  }
}
