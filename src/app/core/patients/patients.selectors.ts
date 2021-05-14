import { createSelector } from '@ngrx/store';
import { selectPatientsState } from '../core.state';
import { PatientsInfo } from "../../shared/models/patients-info.model";
import { PatientsState } from "./patients.model";

export const selectPatients = createSelector(
  selectPatientsState,
  (state: PatientsState) => state
);

export const getPatientsInfo = createSelector(
  selectPatientsState,
  (state: PatientsState) => state.patientsInfo
);

export const getPatient = createSelector(
  getPatientsInfo,
  (state: PatientsInfo) => state.patient
);

