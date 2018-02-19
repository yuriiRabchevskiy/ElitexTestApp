import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {
  title: string = 'Expenses';

  expand: boolean = true;
  editMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  hidePanel() {
    this.expand = !this.expand;
  }

  showInput() {
    this.editMode = !this.editMode;
  }
  hideInput(event) {
    this.editMode = event;
  }
  titleChange(event) {
    this.title = event;
    this.editMode = false;
  }

}
