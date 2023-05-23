import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/services/salary.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddSalary } from 'src/app/services/salary';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit
{

  employeeData:any;

  addSalary: AddSalary=new AddSalary()

  constructor(private salaryService: SalaryService,
               private employeeService: EmployeeService,
               private router: Router){}

  ngOnInit(): void
   {
    
    let res=this.employeeService.getDropdown();  
    res.subscribe((data)=>
    {
     console.log(data);
     this.employeeData=data;
    })
   }


  formSubmit()
  {
   this.salaryService.saveSalary(this.addSalary).subscribe((data)=>
   {
     alert("Saved !!!");
     this.router.navigate(["admin/salarylist"]);
   }, (error)=>
 {
    alert(" Failed !!!");
 }
  )
  }

  
  validate()
  {
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }

}
