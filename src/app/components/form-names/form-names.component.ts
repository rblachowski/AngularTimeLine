import { Component, OnInit } from '@angular/core';
import { FormNamesService } from '../../services/FormNames/form-names.service';

@Component({
  selector: 'app-form-names',
  templateUrl: './form-names.component.html',
  styleUrls: ['./form-names.component.scss'],
})
export class FormNamesComponent implements OnInit {
  formData = {
    name: '',
    father: '',
    grandfather: '',
    sons: [''],
    grandsons: [''],
    age: null,
    description: '',
    fragment: '',
  };

  editeData = {
    name: '',
    father: '',
    grandfather: '',
  };

  matchingResults: any[] = [];

  nameList: string[] = [];
  isModalOpen: boolean = false;

  constructor(private formNamesService: FormNamesService) {}

  ngOnInit(): void {}

  saveData(data: any): void {
    console.log('test', data);
    this.formData = data;

    if (this.formData.name) {
      this.formNamesService.saveData(this.formData).subscribe(
        (saveData) => {
          if (saveData.success) {
            alert('Dane zostały zapisane!');
          } else {
            alert(saveData.message);
          }
        },
        (error) => console.error('Błąd:', error)
      );
    }
  }
  updateData(data: any): void {
    this.formData = data;
    this.isModalOpen = true;
  }

  changeData(data: any) {
    this.isModalOpen = true;
  }

  editData(data: any) {
    this.editeData = data;
    if (this.editeData.name.length) {
      console.log('this.editData.name.length', this.editeData.name);

      this.formNamesService.editData(this.editeData).subscribe((data) => {
        this.matchingResults = data.sonsOfGod;

          this.matchingResults = this.matchingResults.filter((item: any) => {
            return item.name
              .toLowerCase()
              .includes(this.editeData.name.toLowerCase());
          });
      });
    }
  }

  searchNames(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.formNamesService.searchNames(query).subscribe(
      (data) => {
        if (data.success) {
          this.nameList = data.names;
        }
      },
      (error) => console.error('Błąd:', error)
    );
  }

  selectName(name: string): void {
    this.formData.name = name;
    this.findData();
  }

  findData(): void {
    this.formNamesService.findData(this.formData.name).subscribe(
      (data) => {
        if (data.success) {
          const record = data.record;
          this.formData = {
            name: record.name,
            father: record.father,
            grandfather: record.grandfather,
            sons: record.sons || [''],
            grandsons: record.grandsons || [''],
            age: record.age,
            description: record.description,
            fragment: record.fragment,
          };
        } else {
          alert('Nie znaleziono rekordu.');
        }
      },
      (error) => console.error('Błąd:', error)
    );
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
