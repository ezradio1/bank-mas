import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Cashier {
  id: string;
  idRepo: number;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  createdDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  constructor(private http: HttpClient) {}

  fetchAllData() {
    return this.http.get<Cashier>(`${environment.firebaseApi}/cashier.json`);
  }
}
