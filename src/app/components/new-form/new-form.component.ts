import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss'],
})
export class NewFormComponent {
  @Input() formData: any;
  @Input() title: string = 'form';
  @Input() isEditable: boolean = false;
  @Input() buttonText: string = '';
  @Input() isEdit: boolean = false;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}
  form: FormGroup = this.fb.group({});

  ngOnInit() {
    if (this.isEditable) {
      console.log('isEditable', this.formData);
      
      this.form = this.fb.group({
        name: [this.formData?.name || '', Validators.required],
        father: [this.formData?.father || ''],
        grandfather: [this.formData?.grandfather || ''],
        sons: this.fb.array(
          this.formData?.sons.map((son: string) => this.fb.control(son)) || []
        ),
        grandsons: this.fb.array(
          this.formData?.grandsons.map((grandson: string) =>
            this.fb.control(grandson)
          ) || []
        ),
        age: [this.formData?.age || ''],
        description: [this.formData?.description || ''],
        fragment: [this.formData?.fragment || '']
      });
    } else {
      this.form = this.fb.group({
        name: [this.formData?.name || '', Validators.required],
        father: [this.formData?.father || ''],
        grandfather: [this.formData?.grandfather || ''],
      });
    }
  }

  get sons(): FormArray {
    return this.form.get('sons') as FormArray;
  }

  get grandsons(): FormArray {
    return this.form.get('grandsons') as FormArray;
  }

  addSon(): void {
    this.sons.push(this.fb.control(''));
    console.log('addSons', this.sons.value, this.form.value);
  }

  addGrandson(): void {
    this.grandsons.push(this.fb.control(''));
  }

  editeData = {
    name: '',
    father: '',
    grandfather: '',
  };

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
