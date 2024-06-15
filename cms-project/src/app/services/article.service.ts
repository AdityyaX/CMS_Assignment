// article.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getArticle(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createArticle(articleData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, articleData);
  }

  updateArticle(id: string, articleData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, articleData);
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}