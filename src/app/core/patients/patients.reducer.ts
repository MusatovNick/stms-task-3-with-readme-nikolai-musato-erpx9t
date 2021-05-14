import { Action, createReducer, on } from "@ngrx/store";
import { fetPatientsSuccess } from "./patients.actions";
import { PatientsState } from "./patients.model";

export const initialState: PatientsState = {
  patientsInfo: null,
};

const reducer = createReducer(
  initialState,

  on(
    fetPatientsSuccess,
    (state, { patientsInfo }) => ({
      ...state,
      patientsInfo,
    }),
  ),
)

export function patientsReducer(
  state: PatientsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
