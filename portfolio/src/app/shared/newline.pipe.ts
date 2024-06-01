import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'newline'
})
export class NewlinePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }
}
