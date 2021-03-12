import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  cachedPosts: Post[];
  cachedCategories: string[];
  baseUrl: string;

  constructor( private http: HttpClient) {
    this.baseUrl = 'https://private-c3edb-postsmock.apiary-mock.com';
    this.cachedPosts = [];
    this.cachedCategories = [];
   }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
