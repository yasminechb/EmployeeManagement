import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
  email: string;
  salary: string;
  address: string;
  imageUrl: string;
  contactNumber: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://retoolapi.dev/HYd96h/data';
  private employees: Employee[] = [];
  private employeesSubject = new BehaviorSubject<Employee[]>(this.employees);

  constructor(private http: HttpClient) { 

  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addEmployee(employee: Employee): void {
    employee.id = this.employees.length + 1; // Générer un ID unique localement
    this.employees.push(employee); // Ajouter au tableau local
    this.employeesSubject.next(this.employees); // Diffuser la nouvelle liste
  }
}
