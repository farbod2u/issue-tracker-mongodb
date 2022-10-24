import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Issue} from "../model/issue";

@Injectable({
    providedIn: 'root'
})
export class IssueService {
    url: string = '/api/issue';

    constructor(private httpClient: HttpClient) {
    }

    getAll() {
        return this.httpClient.get(`${this.url}/getall`)
    }

    get(id: string) {
        return this.httpClient.get(`${this.url}/${id}`);
    }

    delete(id: string) {
        return this.httpClient.delete(`${this.url}/${id}`);
    }

    insert(entity: Issue) {
        return this.httpClient.post(`${this.url}`, entity);
    }

    update(entity: Issue) {
        return this.httpClient.put(`${this.url}`, entity);
    }

}
