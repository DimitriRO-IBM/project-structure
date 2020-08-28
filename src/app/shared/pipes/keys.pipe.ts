import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysPipe'
})
export class KeysPipe implements PipeTransform {

  // tslint:disable-next-line:no-any
  transform(value: any): string[] {
    return Object.keys(value);
  }

}
