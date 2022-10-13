import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsersEntry } from '../component/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userInfo = {};
  constructor(
    private http: HttpClient
  ) { }
  API_URL = 'api/user';

  getAllUsers() {
    const parameter = {};
    console.log(`${environment.API_BASE_URL}${this.API_URL}`)
    return this.http.get(`${environment.API_BASE_URL}${this.API_URL}`, {
      params: parameter
    })
      .pipe(
        catchError(this.handleError)
      );
  }
  getList() {
    const parameter = {};
    return this.http.get(`${environment.API_BASE_URL}${this.API_URL}/list`, {
      params: parameter
    })
      .pipe(
        catchError(this.handleError)
      );
  }
  createUser(data: UsersEntry) {
		return this.http.post(`${environment.API_BASE_URL}${this.API_URL}`, data)
		  .pipe(
			  catchError(this.handleError)
		  );
	}

  handleError(error) {
    // if (error.error instanceof ErrorEvent) {
    //   console.error("A client side error occurs. The error message is " + error.message);
    //   } else {
    //   console.error(
    //         "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
    //   }

    return throwError(error);
  }
}
