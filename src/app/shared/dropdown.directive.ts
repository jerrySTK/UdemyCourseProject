import { Directive,OnInit,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
    
    private opened:boolean = false;

    constructor(private element: ElementRef,private renderer: Renderer2){
    }

    ngOnInit(){

    }

    @HostListener('click') onclick(eventData: Event){
        this.opened = !this.opened;
        if(this.opened)
            this.renderer.addClass(this.element.nativeElement,'open');
        else
            this.renderer.removeClass(this.element.nativeElement,'open');
    }

}