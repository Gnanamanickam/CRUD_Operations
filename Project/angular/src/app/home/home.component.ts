import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/service/http-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  publications: any;

  constructor(private apiService: HttpServiceService) { }


  ngOnInit(): void {
    this.getPublications();
  }

  public getPublications() {
    this.apiService.getDetails("api/getPublications")
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
      this.publications = JSON.parse(tempSet);
    }, error => console.log(error));
}

  public deletePublication(id: any) {
    this.apiService.getDetails("api/publication/" + id)
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }, error => console.log(error));
  }

  public deleteAllPublication() {
    this.apiService.getDetails("api/deletePublications")
    .subscribe((data) => {
      var tempSet = JSON.stringify(data);
    }, error => console.log(error));
  }

}
