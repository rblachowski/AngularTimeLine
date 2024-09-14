import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() data: any;
  @Input() isEdit: boolean = false;

  @Output() updateData: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  changeData(data: any) {
    console.log('changeData', data);
    
    this.updateData.emit(data);

  }
}
