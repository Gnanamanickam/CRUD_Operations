import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  public localUrl = 'http://'+window.location.hostname+':8080/';

  public getDetails(param: any) {
    return this.http.get(this.localUrl+param);
  }

  public postDetails(param: any,data: any) {
    return this.http.post(this.localUrl+param, data);
  }

  public putDetails(param: any,data: any) {
    return this.http.put(this.localUrl+param, data);
  }

  public deleteDetails(param: any,data: any) {
    return this.http.delete(this.localUrl+param, data);
  }


}