import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientComponent } from './patients/patients.component';

export const routes: Routes = [
  { path: 'patients', component: PatientComponent },
  { path: '', redirectTo: '/patients', pathMatch: 'full' }
]
