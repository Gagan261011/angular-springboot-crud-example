import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
/**
 * @title EmployeeListComponent
 * @description This component is responsible for displaying a list of all employees.
 */
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  /**
   * @param employeeService The employee service to use for getting the list of employees.
   * @param router The router to use for navigating to the employee details and update pages.
   */
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  /**
   * @description Initializes the component.
   */
  ngOnInit(): void {
    this.getEmployees();
  }

  /**
   * @description Gets the list of employees from the employee service.
   */
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  /**
   * @description Navigates to the employee details page.
   * @param id The id of the employee to navigate to.
   */
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  /**
   * @description Navigates to the update employee page.
   * @param id The id of the employee to navigate to.
   */
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  /**
   * @description Deletes an employee.
   * @param id The id of the employee to delete.
   */
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
