import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

/**
 * @title EmployeeDetailsComponent
 * @description This component is responsible for displaying the details of a single employee.
 */
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  employee: Employee
  /**
   * @param route The activated route to get the employee id from.
   * @param employeService The employee service to use for getting the employee.
   */
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  /**
   * @description Initializes the component.
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
