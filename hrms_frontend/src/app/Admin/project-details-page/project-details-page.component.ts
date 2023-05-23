import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { AddprojectService } from 'src/app/services/addproject.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css']
})

export class ProjectDetailsPageComponent implements OnInit 
{
  id: any;
  projectId: any;
  projectData: any;

  projectForm: FormGroup;
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: AddprojectService)
  {
    this.route.params.subscribe(parm=>
      {
        console.log("Printing Data Inside project Details============");
        console.log(parm);
        this.projectId=parm['id'];
      })
  }




  ngOnInit(): void 
  {
    console.log("Printing Data Inside project Details============Project Id ");
    console.log(this.id);
    
   this.projectService.getProjectById(this.projectId).subscribe(data=>
    {
      console.log("Printing Data Inside project Details============");
      console.log(data);
      //console.log(data.databaseTech.length);
      this.projectData=data;

      console.log(data.technology.length);
      // console.log(data.technology.technologyName[0]);
      console.log(this.projectData.quantities.employeeId);
      
      console.log("Printing Data inside loop ==============");
      for(var i=0; i<=this.projectData.technology.length; i++)
      {
        console.log(this.projectData.technology);
        console.log(this.projectData.technology.technology_name[i]);
      }
      console.log("Printing technology ========================");
      
      console.log(this.projectData.technology.technology_name);
      console.log(this.projectData.technology.technology_name[0]);
      
      
      
      
    })
    
  }

}
