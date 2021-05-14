import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { AppState, ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { fetchPatients } from "../../../core/patients/patients.actions";
import { Store } from "@ngrx/store";
import { Patient } from "../../../shared/models/patient.model";
import { getPatient, getPatientsInfo } from "../../../core/patients/patients.selectors";
import { Observable } from "rxjs";
import { PatientsInfo } from "../../../shared/models/patients-info.model";
import {
  addToFollowPatientList,
  removeFromFollowPatientList,
} from "../../../core/follow-list/follow-list-patients/follow-list-patients.actions";
import { selectFollowPatientsListIds } from "../../../core/follow-list/follow-list-patients/follow-list-patients.selectors";
import { FormControl } from "@angular/forms";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  searchControl: FormControl = new FormControl('');
  patients$: Observable<Patient[]> = null
  patientsInfo$: Observable<PatientsInfo> = null;
  followPatientsList$: Observable<any[]> = null;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.patients$ = this.store.select(getPatient);
    this.patientsInfo$ = this.store.select(getPatientsInfo);
    this.followPatientsList$ = this.store.select(selectFollowPatientsListIds);
  }

  getPatients(): void {
    this.store.dispatch(fetchPatients());
  }

  addToFollowPatientList(patient: Patient) {
    this.store.dispatch(addToFollowPatientList({ patient }));
  }

  removeFromFollowPatientList(id: number) {
    this.store.dispatch(removeFromFollowPatientList({ id }));
  }

  clearInput() {
    this.searchControl.setValue('');
  }
}
