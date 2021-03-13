import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RescueTeam } from '../model/RescueTeam';

@Injectable({
  providedIn: 'root'
})
export class RescueTeamService {

  constructor(private httpClient: HttpClient) { }
  x:any;
  getRescueTeam(id: string){
    const params = new HttpParams().append('id',id);
    return this.httpClient.get('http://localhost:8080/api/rescueTeam/getById/',{params:params}).pipe(
        map((data: any) => {
          console.log(data);
          return data;
        }),
     );
  }
/*
  getmembers(id:number):Observable<any>{
    const params = new HttpParams().append('id',id.toString());
    return this.httpClient.get('http://localhost:8080/api').subscribe();
  }
*/

  createRescueTeam(resTeam:any){
    console.log(resTeam);
    //const params = new HttpParams().append('id',id);
    console.log("RESCUETEAM SERVICE"+resTeam);
    return this.httpClient.post('http://localhost:8080/api/rescueTeam/addRescueTeam/',resTeam,{ responseType: 'text' }).subscribe();
  }


  assignRequest(requestId:any,rescueTeamId:any){
    const params = new HttpParams().append('requestId',requestId).append('rescueTeamId',rescueTeamId);
    return this.httpClient.get('http://localhost:8080/api/rescueTeam/assignRequestToResTeam/',{params:params}).subscribe();
  }
 
}
