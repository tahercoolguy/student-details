import { Component } from '@angular/core';
import { HttpcallService } from './httpcall.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Angular 5';
  public items : Data[];
  constructor(private httpcall:HttpcallService)
  {
   this.getAll();
   this.data = new Data
  }
getAll()
{
  this.httpcall.getAllStudents().subscribe((data)=>{
    this.items= data.data;
 });
}
data:Data;
public Name:string;
public Address:string;
public Telephone:string;
public Standard:string;
public RollNumber:string;
public student_id:Number;
Select(index :number)
{
this.data.student_id=this.items[index].student_id;
this.httpcall.SearchStudents(this.data).subscribe((data)=>{
this.Name=data.data.Name;
this.Address=data.data.Addres;
this.Telephone= data.data.Telephone;
this.Standard=data.data.Standard;
this.RollNumber=data.data.Roll_Number;
this.student_id =data.data.student_id;
});
}
Insert()
{
  if(this.Name  == undefined || this.Name  == "" || this.Address  == undefined || this.Address  == "")
  {
    alert("Kindly Enter Name and Address");
  }else
  {
    this.data.Name = this.Name;
    this.data.Addres=this.Address;
    this.data.Telephone=this.Telephone;
    this.data.Standard=this.Standard;
    this.data.Roll_Number=this.RollNumber;
    this.httpcall.InsertStudents(this.data).subscribe((data)=>{
      alert(data.msg);
      this.getAll();
    })
  }
}
Update()
{
  if(this.student_id  == undefined )
  {
    alert("Kindly Select one Record");
  }else
  {
    this.data.Name = this.Name;
    this.data.Addres=this.Address;
    this.data.Telephone=this.Telephone;
    this.data.Standard=this.Standard;
    this.data.Roll_Number=this.RollNumber;
    this.data.student_id=Number(this.student_id);
    this.httpcall.UpdateStudents(this.data).subscribe((data)=>{
      alert(data.msg);
      this.getAll();
    })
  }
}

Delete()
{
  if(this.student_id  == undefined )
  {
    alert("Kindly Select one Record");
  }else
  {
    this.data.student_id=Number(this.student_id);
    this.httpcall.DeleteStudents(this.data).subscribe((data)=>{
      alert(data.msg);
      this.getAll();
    })
  }
}
}
