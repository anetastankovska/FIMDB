import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorten'
})
export class TextShortenPipe implements PipeTransform {

  transform(value: string, characters: number): string {
    return value.length <= characters ? value : `${value.substring(0, characters)}...`;
  }

}
