// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:44303/api/users'; // API URL

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUser(Id: string): Observable<User> {
    const url = `${this.apiUrl}/${Id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError<User>(`getUser id=${Id}`))
      );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('createUser'))
      );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${user.Id}`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateUser'))
      );
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('deleteUser'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
