import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApirequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }
  handleError(error) {
    console.log(error);
    let snackBarRef = this._snackBar.open('Event Added Successfully');
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 1000);
  }
  handlesignup(requestdata) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + '/api/auth/signup', requestdata, this.httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        },
          error => {
            this.handleError(error);
            reject(error);
          });
    });
  }
  handleLogin(requestdata) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.API_URL + '/api/auth/signin', requestdata, this.httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        },
          error => {
            this.handleError(error);
            reject(error);
          });
    });
  }
  handleLoadEvents() {
    return new Promise((resolve, reject) => {
     const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token':  localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      this.http.get(environment.API_URL + '/fashionevents', httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        },
          error => {
            this.handleError(error);
            reject(error);
          });
    });
  }
  handleAddEvents(requestdata) {
    return new Promise((resolve, reject) => {
     const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token':  localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      this.http.post(environment.API_URL + '/fashionevents', requestdata,httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        },
          error => {
            this.handleError(error);
            reject(error);
          });
    });
  }
  handleupdateEvents(requestdata) {
    return new Promise((resolve, reject) => {
     const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token':  localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      this.http.put(environment.API_URL + '/fashionevents/'+requestdata.eventId, requestdata,httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        },
          error => {
            this.handleError(error);
            reject(error);
          });
    });
  }
  handledeleteEvent(requestdata) {
    return new Promise((resolve, reject) => {
     const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token':  localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      this.http.delete(environment.API_URL + '/fashionevents/'+requestdata.eventId,httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        },
          error => {
            this.handleError(error);
            reject(error);
          });
    });
  }
}
