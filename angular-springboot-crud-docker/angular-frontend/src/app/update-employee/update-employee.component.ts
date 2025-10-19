import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @title UpdateEmployeeComponent
 * @description This component is responsible for updating an employee.
 */
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  /**
   * @param employeeService The employee service to use for updating the employee.
   * @param route The activated route to get the employee id from.
   * @param router The router to use for navigating to the employee list.
   */
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  /**
   * @description Initializes the component.
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  /**
   * @description Handles the form submission.
   */
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  /**
   * @description Navigates to the employee list.
   */
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
