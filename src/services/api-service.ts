import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.http.get(`${env.apiRoot}/posts`);
  }
  getPostById(id): Observable<any> {
    return this.http.get(`${env.apiRoot}/posts/${id}`);
  }
  deletePostById(id): Observable<any> {
    return this.http.delete(`${env.apiRoot}/posts/${id}`);
  }
  updatePostById(id, payload): Observable<any> {
    return this.http.patch(`${env.apiRoot}/posts/${id}`, payload);
  }
}
