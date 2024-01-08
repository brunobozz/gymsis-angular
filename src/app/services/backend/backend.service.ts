import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BackendService {
  private apiContencioso: string = "http://localhost:3000/api/v1/";
    
  constructor(private http: HttpClient) {}

  public getData(endpoint: string) {
    return this.http.get(this.apiContencioso + endpoint);
  }

  public postData(endpoint: string, body: any) {
    return this.http.post(this.apiContencioso + endpoint, body);
  }

  public deleteData(endpoint: string, item: any) {
    return this.http.delete(this.apiContencioso + endpoint + item);
  }

  updateData(endpoint: string, data: any) {
    return this.http.put(this.apiContencioso + endpoint, data);
  }
}
