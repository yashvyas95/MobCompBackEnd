import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessageDto} from '../model/ChatMessageDto';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }
  
  getMessageByRequestId(requestId:number):Observable<any>{
    const params = new HttpParams().append('requestId',requestId.toString());
    //const headers = new HttpHeaders().append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','*');
    console.log("GetMESSAGEBYUSERID"+params);
     return this.httpClient.get('http://localhost:8080/api/message/getmessages/',
     {params:params,
     });
  }

  getMessageByUserId(userId:number):Observable<any>{
    const params = new HttpParams().append('userId',userId.toString());
    console.log("GetMESSAGEBYUSERID"+params);
     return this.httpClient.get('http://localhost:8080/api/message/getmessagesByUserId/',{params:params});
  }


}
