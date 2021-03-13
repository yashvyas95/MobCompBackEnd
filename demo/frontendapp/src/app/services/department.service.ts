import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }


  createDepartment(Dep:any){
    console.log(Dep);
    //const params = new HttpParams().append('id',id);
    console.log("DepartmentService SERVICE"+Dep);
    return this.httpClient.post('http://localhost:8080/api/rescueTeam/addRescueTeam/',Dep,{ responseType: 'text' }).subscribe();
  }

  getAllDepartments():Observable<any>{
      return this.httpClient.get('http://localhost:8080/api/department/getAll/',{});
  }

}
