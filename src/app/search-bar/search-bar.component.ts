import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../app/services/api-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  // data members
  model: any = {};
  searchInProgress: Boolean = false;

  constructor(private apiService: ApiService) { }

  searchPatient(patient) {
    const isNameValid = patient.form.controls.name.status === 'VALID';
    const isDOBValid = patient.form.controls.dateOfBirth.status === 'VALID'

    if (isNameValid && isDOBValid) {
      // disable search button
      this.searchInProgress = true;

      // this.apiService.getPatiensByNameAndDOB(patient.name, patient.birthDate).subscribe(
      //   data => {
      //     console.log(data)
      //   }
      // )

      // enable search button
      this.searchInProgress = false;
    } else {
      window.alert('Provided data is not valid');
    }
  }
}
