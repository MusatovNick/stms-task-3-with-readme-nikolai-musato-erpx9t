import { AppState } from "../core.state";
import { PatientsInfo } from "../../shared/models/patients-info.model";

export interface PatientsState {
  patientsInfo: PatientsInfo;
}

export interface State extends AppState {
  patientsInfo: PatientsState;
}
