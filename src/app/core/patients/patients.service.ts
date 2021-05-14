import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PatientsInfo } from "../../shared/models/patients-info.model";


@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<PatientsInfo> {
    return this.http.get<PatientsInfo>(`https://api.mocki.io/v2/51597ef3`);
  }
}
