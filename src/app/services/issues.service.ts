import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(
    private http: HttpClient
  ) { }

  getIssuesData(page?: number, per_page?: number): Observable<any> {
    if(!page) page = 1;
    if(!per_page) per_page = 10;
    return this.http.get(`https://api.github.com/repos/ionic-team/ionic-framework/issues?page=${page}&per_page=${per_page}`);
  }

  getNumberOfIssues() {
    return this.http.get(`https://api.github.com/repos/ionic-team/ionic-framework`);
  }
}
