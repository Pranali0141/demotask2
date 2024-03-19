import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  submitted=false;
  myForm:any;
  count:number=1;
  AllData:any=[];
  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
     id:[''],
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      email:['',[Validators.required]]
    })
  }

  submit(){
    this.submitted = true
  
    console.log(this.myForm.value);
    
    
      const formData = this.myForm.value;
      formData.id = this.generateUniqueId();
      
      this.AllData.push(formData);
      this.myForm.reset();
  

  }

  del(index:any){
    alert("Are you sure for delete the record")
    this.AllData.splice(index,1);
  }

  generateUniqueId(): number {
    const timestamp = new Date().getTime();
    return  this.count++;
  }
}
