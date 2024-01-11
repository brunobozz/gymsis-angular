import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private URL_API: string = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) {}

  public getData(endpoint: string) {
    return this.http.get(this.URL_API + endpoint);
  }

  public postData(endpoint: string, body: any) {
    return this.http.post(this.URL_API + endpoint, body);
  }

  public deleteData(endpoint: string, item: any) {
    return this.http.delete(this.URL_API + endpoint + item);
  }

  updateData(endpoint: string, data: any) {
    return this.http.put(this.URL_API + endpoint, data);
  }
}
