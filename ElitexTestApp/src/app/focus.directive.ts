import { Directive, Input, ElementRef, Inject } from '@angular/core';

@Directive({
    selector: '[focus]'
})
export class FocusDirective {
    private focusEmitterSubscription;

    @Input('focus')
    set focus(value: boolean) {
        if (value) {
            this.element.nativeElement.focus()
        }

    }

    constructor( @Inject(ElementRef) private element: ElementRef) {

    }
}
