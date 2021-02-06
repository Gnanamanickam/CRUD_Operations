import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/service/http-service.service'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  title = 'angular';
  studentsList: any;

  createPublications = new FormGroup({
    title: new FormControl(),
    student_id: new FormControl(),
    year: new FormControl() 
}); 

createStudentDetails = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  id: new FormControl(),
  email: new FormControl()
}); 

  constructor(private apiService: HttpServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getStudentDetails();
  }

  public getStudentDetails() {
    this.apiService.getDetails("api/getStudentDetails")
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
      this.studentsList = JSON.parse(tempSet);
    }, error => console.log(error));
  }

  public updatePublicationDetail(value: any) {
    this.apiService.postDetails("api/UpdatePublication" , value)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }, error => console.log(error));
  }

  public CreatePublication() {
    this.apiService.postDetails("api/createPublication" , this.createPublications)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }, error => console.log(error));
  }

  public CreateStudentData() {
    this.apiService.postDetails("api/createStudentDetails" , this.createStudentDetails)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }, error => console.log(error));
  }


  static emailValidator(control: { value: string; }) {
		if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
			return null;
		} else {
			return { 'invalidEmailAddress': true };
		}
	}

}
