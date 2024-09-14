import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() data: any;

  @Output() openModal: EventEmitter<any> = new EventEmitter();

  editPerson() {
    this.openModal.emit(this.data);
  }
}
