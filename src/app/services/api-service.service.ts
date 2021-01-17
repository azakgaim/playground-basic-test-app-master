import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }

  // gets patients by name and DOB
  getPatiensByNameAndDOB(name: string, DOB: string) {
    return this.httpClient.get(environment.queryURI + '/Patient' + '?name=' + name + '&dateOfBirth=' + DOB,
      { headers: this.getHeaders() });
  }

  // gets all patients whose DOB falls between 2 dates
  getPatientsBetweenAges(minAge:string, maxAge:string) {
    return this.httpClient.get(environment.queryURI + '/Patient?birthDate=' + '{lt:' + maxAge + ', gt:' + minAge + '30}',
      { headers: this.getHeaders() });
  }
}
