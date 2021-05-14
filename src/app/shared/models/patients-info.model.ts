import { Patient } from "./patient.model";

export interface PatientsInfo {
  count: number,
  patient: Patient[],
  undisplayedMatches: boolean,
  moreUncountedMatches: boolean,
}
