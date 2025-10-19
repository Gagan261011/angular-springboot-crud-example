import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

/**
 * @title CreateEmployeeComponent
 * @description This component is responsible for creating a new employee.
 */
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  /**
   * @param employeeService The employee service to use for creating the employee.
   * @param router The router to use for navigating to the employee list.
   */
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * @description Saves the new employee to the database.
   */
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  /**
   * @description Navigates to the employee list.
   */
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  /**
   * @description Handles the form submission.
   */
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
