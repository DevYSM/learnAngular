import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummeryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if (!value) return null;
    let acutalLimit = limit ? limit : 20;
    return value.substr(0,acutalLimit) + '....';
  }

}
