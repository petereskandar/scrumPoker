import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessionId() {
    return this.http.get(environment.SERVER_URL.concat(environment.endpoint.getSessionId)).subscribe(res => {
      console.log('res', res);
    });
  }
}
