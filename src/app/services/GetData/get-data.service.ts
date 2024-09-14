import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  
  private apiUrl = 'http://localhost:3000'; // Podstawowy URL API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    console.log('getData');

    return this.http.get(`${this.apiUrl}/get-data`);
  }

  saveData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-data`, data);
  }

  findData(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/find-data?name=${name}`);
  }

  editData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/edit-data`, data);
  }

  searchNames(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search-names?query=${query}`);
  }
}
