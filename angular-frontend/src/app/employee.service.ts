import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

/**
 * @title EmployeeService
 * @description This service is responsible for all HTTP requests to the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  /**
   * @param httpClient The HTTP client to use for all requests.
   */
  constructor(private httpClient: HttpClient) { }
  
  /**
   * @returns An observable of the list of employees.
   */
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  /**
   * @param employee The employee to create.
   * @returns An observable of the created employee.
   */
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  /**
   * @param id The id of the employee to get.
   * @returns An observable of the employee.
   */
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  /**
   * @param id The id of the employee to update.
   * @param employee The employee to update.
   * @returns An observable of the updated employee.
   */
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  /**
   * @param id The id of the employee to delete.
   * @returns An observable of the deleted employee.
   */
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
