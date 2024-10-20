import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employees: any[] = [];

  constructor(private fb: FormBuilder,private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],
      contactNumber: ['', Validators.required],
      dateOfBirth: [null, Validators.required],  
      address: ['']  

    });
  }
 
  ngOnInit() {
  }


  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
      this.employeeService.addEmployee(employeeData); // Appel côté frontend seulement
      this.employeeForm.reset(); // Réinitialiser le formulaire après ajout
      console.log('Employee added:', employeeData);
    } else {
      console.log('Form is invalid');
    }
  }
}

