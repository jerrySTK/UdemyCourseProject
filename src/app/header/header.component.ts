import {Component, Output,EventEmitter} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() onOptionSelected:EventEmitter<string> = new EventEmitter<string>();

    selectOption(option:string):void{
        this.onOptionSelected.emit(option);
    }
}