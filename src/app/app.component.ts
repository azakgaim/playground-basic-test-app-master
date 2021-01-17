import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../app/services/api-service.service';

// classes
// import { Patient } from './classes/entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  // patients: Array<Patient> = [];

  // patient = {
  //   resourceType: 'patient',
  //   id: 1,
  //   fullUrl: 'http://hapi.fhir.org/baseR4/Patient/1182717',
  //   gender: 'male',
  //   birthDate: '1974-12-25'
  // }

  // constructor(private apiService: ApiService) { }

  ngOnInit() {
  //   this.apiService.getPatients().subscribe(
  //     data => {
  //       // console.log(data);
  //
  //       for(let key in data) {
  //         let entry = data[key];
  //
  //         if (key === 'entry') {
  //           entry.forEach(e => {
  //             const patient = new Patient(e.resource.resourceType,
  //                                         e.resource.id,
  //                                         e.fullUrl,
  //                                         e.resource.gender,
  //                                         e.resource.birthDate,
  //                                         e.resource.name[0].given[0]);
  //             this.patients.push(patient);
  //           })
  //         }
  //       }
  //     }
  //   )
  }
}
