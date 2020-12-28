import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  submitForm(formData){
    return this.http.post<any>("https://lms.productconsultancy.com/courses/course",{"formData":formData})
  }
  getPolls(){
    return this.http.get<any>("https://lms.productconsultancy.com/Test/polls")
  }
  
}
