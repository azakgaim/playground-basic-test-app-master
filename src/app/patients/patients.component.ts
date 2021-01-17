import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../app/services/api-service.service';

// classes
import { Patient } from '../classes/entry';

class Timer {
  readonly start = performance.now();

  stop(): number {
    const time = performance.now() - this.start;
    return Math.round(time);
  }
}


@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientComponent implements OnInit {
  patients: Array<Patient> = [];      // holds array of patients
  timer: Timer;                       // timer to mention duration of a process
  elapsedTime: number;                // holds duration of a process

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.timer = new Timer();

    this.apiService.getPatients().subscribe(
      data => {
        // console.log(data);

        for(let key in data) {
          let entry = data[key];

          if (key === 'entry') {
            entry.forEach(e => {
              const patient = new Patient(e.resource.resourceType,
                                          e.resource.id,
                                          e.fullUrl,
                                          e.resource.gender,
                                          e.resource.birthDate,
                                          e.resource.name[0].given[0]);
              this.patients.push(patient);
            })
          }
        }
        this.elapsedTime = this.timer.stop();

        // sort by date of birth        
        this.sortPatients(this.patients);
      }
    )
  }

  // sort patients by DOB
  sortPatients(patients) {
    patients.sort((a, b) => b.birthDate - a.birthDate);
  }
}
