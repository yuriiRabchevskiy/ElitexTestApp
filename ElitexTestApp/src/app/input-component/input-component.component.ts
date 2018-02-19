import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent {
  focused: boolean = true;
  invalid: boolean = false;
  private _value: string = '';
  @Input() set value(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  @Output() save: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  onKeyPress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.confirmEdit();
    } else if (event.keyCode === 27) {
      this.cancelEdit();
    }
  }
  onInput(value) {
    this.value = value;
    if (!this.value) {
      this.invalid = true;
      return;
    }
    if (this.value.charAt(0) === ' ') {
      this.invalid = true;
      return;
    }
    this.invalid = false;
  }

  confirmEdit() {
    if (!this.value || this.invalid) {
      return;
    }
    this.reset();
    this.save.emit(this.value);
  }

  focusOut() {
    this.focused = !this.focused;
    if (this.value) {
      return;
    }
    this.reset();
  }

  cancelEdit() {
    this.cancel.emit(false);
    this.reset();
  }

  private reset() {
    this.focused = false;
  }

}
