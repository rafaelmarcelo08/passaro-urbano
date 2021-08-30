import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(value: string): string {

        if (value.length > 15) {
            return value.substr(0, 15) + '...';
        }

        return value;
    }
}