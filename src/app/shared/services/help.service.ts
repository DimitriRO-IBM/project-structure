import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  helpSubject: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
  ) { }

  setHelp(help: string): void {
    this.helpSubject.next(help);
  }

  // tslint:disable-next-line:no-any
  getHtmlHelpfile(uri: string): Observable<any> {
    return this.http.get(uri, {responseType: 'text'});
  }
}
