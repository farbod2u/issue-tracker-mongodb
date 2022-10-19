import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  url: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(`${this.url}/api/issue/getall`)
  }

  get(id: string) {
    return this.httpClient.get(`${this.url}/api/issue/${id}`);
  }


  delete(id: string){
    return this.httpClient.delete(`${this.url}/api/issue/${id}`);
  }

}
