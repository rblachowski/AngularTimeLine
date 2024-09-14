import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormNamesService {
  private apiUrl = 'http://localhost:3000'; // URL API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-data`);
  }

  saveData(formData: any): Observable<any> {
    console.log('formData', formData);

    return this.getData().pipe(
      switchMap((data) => {
        const modifiedFormData = {
          index: data.sonsOfGod.length,
          ...formData,
        };
        return this.http.post(`${this.apiUrl}/save-data`, modifiedFormData);
      })
    );
  }

  editData(formData: any): Observable<any> {
    console.log('formData', formData);

    return this.getData().pipe(
      switchMap((data) => {
        return of(data);
      })
    );
  }

  

  updateData(formData: any): Observable<any> {
    console.log('formData', formData);

    return this.getData().pipe(
      switchMap((data) => {
        const modifiedFormData = {
          index: data.sonsOfGod.length,
          ...formData,
        };
        return this.http.post(`${this.apiUrl}/save-data`, modifiedFormData);
      })
    );
  }

  searchNames(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search-names?query=${query}`);
  }

  findData(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/find-data?name=${name}`);
  }
}
