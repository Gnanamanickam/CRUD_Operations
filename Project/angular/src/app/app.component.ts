import { Component } from '@angular/core';
import { HttpServiceService } from 'src/service/http-service.service'
import { Student } from 'src/shared/student'
import { Publication } from 'src/shared/publication'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  publications: any;
  studentsList: any;

  constructor(private apiService: HttpServiceService) { }

  ngOnInit() {
    this.getPublications();
    this.getStudentDetails();
  }

  public getPublications() {
      this.apiService.getDetails("api/getPublications")
      .subscribe((data) => {
        var tempSet = JSON.stringify(data);
        this.publications = JSON.parse(tempSet);
      }
      )
  }

  public getStudentDetails() {
    this.apiService.getDetails("api/getStudentDetails")
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
      this.studentsList = JSON.parse(tempSet);
    }
    )
  }

  public updatePublicationDetail(value: any) {
    this.apiService.postDetails("api/UpdatePublication" , value)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }
    )
  }

  public CreatePublication(value: any) {
    this.apiService.postDetails("api/createPublication" , value)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }
    )
  }

  public deletePublication(id: any) {
    this.apiService.getDetails("api/publication/" + id)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }
    )
  }

  public deleteAllPublication() {
    this.apiService.getDetails("api/deletePublications")
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }
    )
  }
}
