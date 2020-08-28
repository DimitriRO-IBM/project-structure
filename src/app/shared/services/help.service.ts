import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  helpSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setHelp(help: string): void {
    this.helpSubject.next(help);
  }
}
