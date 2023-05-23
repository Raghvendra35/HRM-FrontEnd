import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AddprojectService } from 'src/app/services/addproject.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empData:any;
  javaData:any;
  averageData:any;
  projectData:any;

  list:Array<any>=[];
  lists:any;
  myType = 'PieChart';
 
  myData : any
  myData1 : any
  constructor(private employeeService:EmployeeService,private projectService:AddprojectService,
    private salaryService:SalaryService,private router:Router){

  }

 getPieChart(){
  this.myData = [
    ['Java developer', this.ja],
    ['Android Developer', this.andr],
    ['.Net Developer', this.ne],
    ['Data Analytics', this.ana],
    ['Tester', this.lists],
    ['Full stack Developer', this.fu],
    ['Angular Developer', this.an],
    
  ];
 }
 getPieChart1(){
  this.myData1 = [
    ['Xicom', this.Xicom],
    ['NMS', this.nm],
    ['CRM', this.cr],
    ['DIMS', this.dim],
    ['go to market', this.go],
    ['CITELUM', this.cim]
  ];
 } 


 
 ischart: boolean = false
 check(){
  if(this.lists!=undefined && this.ja!=undefined && this.ne!=undefined && this.an!=undefined && 
    this.ana!=undefined && this.andr!=undefined && this.fu!=undefined){
    // console.log(this.getPieChart(),'fghjkjhgfdgh');
  console.log('test');
  this.ischart = true;
  // this.getPieChart();
  var nums:number[] = [this.lists,this.ja,this.ne,this.an,this.ana,this.andr,this.fu] ;
  console.log(nums,"wrong");
  
  }
  else{
    console.log('manisha');
    
  }
 }

 check1(){
  if(this.Xicom!=undefined && this.nm!=undefined && this.cr!=undefined && 
    this.dim!=undefined && this.go!=undefined && this.cim!=undefined){
    // console.log(this.getPieChart(),'fghjkjhgfdgh');
  console.log('test');
  this.ischart = true;
  this.getPieChart1();
  var nums:number[] = [this.Xicom,this.nm,this.cr,this.dim,this.go,this.cim] ;
  console.log(nums,"oh shitttttttttttt");
  
  }
  else{
    var nums:number[] = [this.Xicom,this.nm,this.cr,this.dim,this.go,this.cim] ;
    console.log(nums,"oh shitttttttttttt");
    console.log('manisha');
    
  }
 }
 
  ngOnInit(): void {
    //setInterval(this.check, 10000);
    let res=this.employeeService.CountEmployee();  
    
    res.subscribe((data)=>
    {
     this.empData=data;

     console.log(this.empData,"ppppppp")
    })

    let res1=this.salaryService.getAverageSalary();
    
    res1.subscribe((data)=>
    {
      this.averageData=data;

      console.log(this.averageData,"average")
    })

    let res2=this.projectService.getProjectCount();
    res2.subscribe((data)=>{
      this.projectData=data;

      console.log(this.projectData,"proData");
    })
  

    this.getTester(this.design);
    this.getJava(this.Java);
    this.getAngular(this.Angular);
    this.getFull(this.Full);
    this.getNet(this.Net)
    this.getAndroid(this.Android);
    this.getAnaytics(this.Analytics);
    this.getPieChart();
    this.getXicom(this.xi);
    this.getNms(this.nms);
    this.getcims(this.cims);
    this.getgoto(this.goto);
    this.getCrm(this.crm);
    this.getDim(this.dims);
    this.getPieChart();
    this.getPieChart1();
    this.check();
    this.getPagination();
  
    
    
  }
  tes:any;  
   design:string = 'Tester'; 

  getTester(design:any){
    let des=this.employeeService.getDesignation(design);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.lists=data.count;
      if(this.lists!=null||this.lists!=undefined){

        this.getPieChart();
      }
    })
  }
  ja:any;
  Java:String='Java Developer';
  getJava(Java:any){
    let Javavd=this.employeeService.getDesignation(Java);

    Javavd.subscribe((data)=>
    {
      console.log(data,"nnnnnnnnnnnnnn");
      this.ja=data.count;
      if(this.ja!=null||this.ja!=undefined){

        this.getPieChart();
      }
      
    })
  }

 an:any;
  Angular:String='Angular Developer';
  getAngular(Angular:any){
    let Angulard=this.employeeService.getDesignation(Angular);

    Angulard.subscribe((data)=>
    {
      console.log(data,"ooooooooooooo");
      this.an=data.count;
      if(this.an!=null||this.an!=undefined){

        this.getPieChart();
      }
    
    })
  }

  fu:any;
  Full:String='Full Stack Developer';
  getFull(Full:any){
    let Fulld=this.employeeService.getDesignation(Full);

    Fulld.subscribe((data)=>
    {
      console.log(data,'qqqqqqqqq');
      this.fu=data.count;
      if(this.fu!=null||this.fu!=undefined){

        this.getPieChart();
      }
      
      
    })
  }

  ne:any;
  Net:String='.Net developer';
  getNet(Net:any){
    let Netd=this.employeeService.getDesignation(Net);

    Netd.subscribe((data)=>{
      console.log(data,'');

      this.ne=data.count;
      if(this.ne!=null||this.ne!=undefined){

        this.getPieChart();
      }
      
    })
  }

  andr:any;
  Android:String='Android Developer';
  getAndroid(Android:any){
    let Androidd=this.employeeService.getDesignation(Android);

    Androidd.subscribe((data)=>{
      console.log(data,'ssssssssssss')
      this.andr=data.count;
      if(this.andr!=null||this.andr!=undefined){

        this.getPieChart();
      }
      
    })
  }

  ana:any;
   Analytics:String='Data Analytics';
   getAnaytics(Analytics:any){
    let Analyticsd=this.employeeService.getDesignation(this.Analytics);

    Analyticsd.subscribe((data)=>{
      console.log(data,'tttttttttt')
      this.ana=data.count;
      if(this.ana!=null||this.ana!=undefined){

        this.getPieChart();
      }
      
      
    })
   }
   

   
   

  
   
   width = 550;
   height = 400;
 


   Xicom:any;  
   xi:string = 'Xicom'; 

  getXicom(xi:any){
    let des=this.projectService.getProjectname(xi);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.Xicom=data.count;
      if(this.Xicom!=null||this.Xicom!=undefined){

        this.getPieChart1();
      }
    })
  }
  openDrop(e:any){
    let r = e.target?.parentElement?.parentElement?.parentElement
    r.classList.toggle('showMenu');
  }
  nm:any;  
   nms:string = 'NMS'; 

  getNms(nms:any){
    let des=this.projectService.getProjectname(nms);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.nm=data.count;
      if(this.nm!=null||this.nm!=undefined){

        this.getPieChart1();
      }
    })
  }

  cr:any;  
  crm:string = 'CRM'; 

  getCrm(crm:any){
    let des=this.projectService.getProjectname(crm);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.cr=data.count;
      if(this.cr!=null||this.cr!=undefined){

        this.getPieChart1();
      }
    })
  }

  go:any;  
   goto:string = 'go to market'; 

  getgoto(goto:any){
    let des=this.projectService.getProjectname(goto);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.go=data.count;
      if(this.go!=null||this.go!=undefined){

        this.getPieChart1();
      }
    })
  }

  dim:any;  
   dims:string = 'DIMS'; 

  getDim(dims:any){
    let des=this.projectService.getProjectname(dims);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.dim=data.count;
      if(this.dim!=null||this.dim!=undefined){

        this.getPieChart1();
      }
    })
  }

  cim:any;  
   cims:string = 'CITELUM'; 

  getcims(cims:any){
    let des=this.projectService.getProjectname(cims);

    des.subscribe((data)=>
    {
      console.log(data,"mmmmmmmmmm");
      this.cim=data.count;
      if(this.cim!=null||this.cim!=undefined){

        this.getPieChart1();
      }
    })
  }







//   title2= 'Employee Departments';
//   typem = 'PieChart';
//   type1n = 'LineChart';
//   type2o = 'ColumnChart';

//   // column chart

//   columnsChartdata2= [
//     ['Data Anaytics', 16, 'color: rgb(143, 27, 0)', '$6'],
//     ['.Net Developer', 3, 'color: rgb(143, 27, 0)', 3],
//     ['Angular Developer', 2, 'color: rgb(143, 27, 0)', 2],
//     ['Full Stack Developer', 5, 'color: rgb(143, 27, 0)', 4],
//     ['Java Developer', 9, 'color: rgb(143, 27, 0)', 4],
//     ['Tester', 2, 'color: rgb(143, 27, 0)', 2],
//   ];
//   columnsChartdatacolumn2 = [
//     'Year',
//     'value',
//     { role: 'style' },
//     { role: 'annotation' },
//   ];
//   columnsChartoptions2 = {
//     title: '',
//     tooltip: {
//       textStyle: { color: 'blue', fontName: 'Tahoma', fontSize: '15' },
//     },
//     labels: 'none',
//     pieSliceText: 'none',
//     pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
//     slices: [
//       { color: '3eafe0' },
//       { color: 'bd6a67' },
//       { color: 'b9b262' },
//       { color: '6abf7e' },
//       { color: '6c95b7' },
//       { color: 'B7E50D' },
//     ],
//     is3D: false  ,
//     fontSize: 9,
//     legend: 'dsd',
//   };

//   // column chart
//   pieChartColumns2 = [
//     'Year',
//     'value',
//     { role: 'style' },
//     { role: 'annotation' },
//   ];
//   pieChartData2 = [
//     ['Data Anaytics', { v: 2, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['.Net Developer', { v: 6, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['Angular Developer', { v: 3, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['Full Stack Developer', { v: 8, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['Java Developer', { v: 9, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['Tester', { v: 1, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//   ];

//   // Line Chart
//   lineChartoptions2 = {
//     tooltip: { isHtml: true },
//     legend: 'none',
//   };
//   lineChartcolumnNames2 = [
//     'Year',
//     'value',
//     { role: 'style' },
//     { role: 'annotation' },
//     { type: 'string', role: 'tooltip', p: { html: true } },
//   ];
//   lineChartdata2 = [
//     ['Data Anaytics', 5, 'color: rgb(143, 27, 0)', '6K', 'Other <br/> $ 6'],
//     ['.Net Developer', 7, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['Angular Developer', 12, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['Full Stack Developer', 10, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['Java Developer', 8, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['Tester',2, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],

//   ];

//   //*********************************************************************** */

//   title1 = 'Employee Of the Company';
//   typea= 'PieChart';
//   typeb= 'LineChart';
//   typec= 'ColumnChart';

//   // column chart

//   columnsChartdata1 = [
//     ['other', 16, 'color: rgb(143, 27, 0)', '$6'],
//     ['Architect', 3, 'color: rgb(143, 27, 0)', 3],
//     ['Business', 2, 'color: rgb(143, 27, 0)', 2],
//     ['Project', 5, 'color: rgb(143, 27, 0)', 4],
//     ['developer', 9, 'color: rgb(143, 27, 0)', 4],
//   ];
//   columnsChartdatacolumn1 = [
//     'Year',
//     'value',
//     { role: 'style' },
//     { role: 'annotation' },
//   ];
//   columnsChartoptions1 = {
//     title: '',
//     tooltip: {
//       textStyle: { color: 'blue', fontName: 'Tahoma', fontSize: '15' },
//     },
//     labels: 'none',
//     pieSliceText: 'none',
//     pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
//     slices: [
//       { color: '3eafe0' },
//       { color: 'bd6a67' },
//       { color: 'b9b262' },
//       { color: '6abf7e' },
//       { color: '6c95b7' },
//     ],
//     is3D: false  ,
//     fontSize: 9,
//     legend: 'dsd',
//   };

//   // column chart
//   pieChartColumns1 = [
//     'Year',
//     'value',
//     { role: 'style' },
//     { role: 'annotation' },
//   ];
//   pieChartData1 = [
//     ['other', { v: 2, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['CIMS', { v: 6, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['NMS', { v: 3, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['XiCom', { v: 8, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//     ['Go To Market', { v: 9, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
//   ];

//   // Line Chart
//   lineChartoptions1 = {
//     tooltip: { isHtml: true },
//     legend: 'none',
//   };
//   lineChartcolumnNames1 = [
//     'Year',
//     'value',
//     { role: 'style' },
//     { role: 'annotation' },
//     { type: 'string', role: 'tooltip', p: { html: true } },
//   ];
//   lineChartdata1 = [
//     ['other', 5, 'color: rgb(143, 27, 0)', '6K', 'Other <br/> $ 6'],
//     ['CIMS', 7, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['NMS', 12, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['XiCom', 10, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//     ['Go To Market', 8, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
//   ];

employeeList :Array<any>=[];
employees:any;

pageObject ={

  page: 0,
  size: 10,
  totalPage:0
}




  
  
    // let resp=this.employeeService.getEmployee();
    //  resp.subscribe((data)=>
    //   {
    //  //   console.log(data);
        
    //     this.employees=data;
    //   });
  
    


    getPagination()
    {
      this.employeeService.getEmployeePagination(this.pageObject.page, this.pageObject.size).subscribe((data:any)=>
      {
        console.log(data);
          this.employees=data.content;
          this.pageObject.page=data.number;
          console.log(this.pageObject.page);
           this.pageObject.totalPage=data.totalPages
      })
    }
    asd(a){
      this.router.navigate(['employeelist/'+a])
    }


    myFuction(event:any,value: any)
    {
        //console.log(event);
         if(event == 'prev')
         {
           this.pageObject.page = value- 1;
           if(this.pageObject.page >-1 && event =='prev' && this.pageObject.totalPage >this.pageObject.page)
           {
             this.getPagination();
             console.log("prev B");
             
           }
          }

        if(event == 'next')
         {
         this.pageObject.page = value+1;
          
         if(event =='next' && this.pageObject.totalPage >this.pageObject.page)
         {
           this.getPagination();
           console.log("Next b");
           
         }else
         {
          alert("This is last Page !!!");
         }

         }
       
  }
      
               
                    
     


  public deleteEmployee(id: number)
  {
          
    if(confirm('Are you sure to delete the record ?'))
    {
      this.employeeService.deleteEmployee(id).subscribe(data=>
      {
        this.router.navigate(["admin/employeelist"]);
      },(erro)=>
      {
        alert("Failed !!!");
      })
    }

  }

 

  
  updateEmployee(employeeId:number)
  {
   this.router.navigate(['updateemployee',employeeId]);
   
  }





  getEmployeeById(id:any){

  }


  getDetails(employeeId:number)
  {
   this.router.navigate(['employeelist/detailspage/',employeeId]);
   
  }
  



  // Related Search 

  keywordSearch: any;

  search(keyword: any)
  {
   console.log(keyword);
   this.employeeService.searchData(keyword).subscribe(data=>
    {
      console.log(data);
      this.employees=data;
    })
  }

}























  // this.employeeService.getEmpLIst().subscribe(data =>
  //   {
  //     this.employees = data;
  //   })
  // throw new Error('Method not implemented.');
  //this.getfetchEmpolyee();


// getfetchEmpolyee(){
  //this.employeeService.getEmployee().subscribe({
   //next:(data)=>{
    //  this.employeeList = data;
     // console.log((this.employeeList));
      
   // }
  //})
//}

//}


 