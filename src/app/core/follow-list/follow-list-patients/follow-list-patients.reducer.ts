import { Action, createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { addToFollowPatientList, removeFromFollowPatientList } from "./follow-list-patients.actions";
import { FollowListPatient } from "../../../shared/models/follow-list-patient.model";

export interface FollowListPatientState extends EntityState<FollowListPatient> {
}

export const adapter: EntityAdapter<FollowListPatient> = createEntityAdapter<FollowListPatient>({
  selectId: (patient) => patient.code,
  sortComparer: false,
});

export const initialState: FollowListPatientState = adapter.getInitialState({});

const reducer = createReducer(
  initialState,

  on(addToFollowPatientList, (state, { patient }) => {
    return adapter.addOne(patient, state)
  }),

  on(removeFromFollowPatientList, (state, { id }) => {
    return adapter.removeOne(id, state)
  }),
)

export function followListPatientReducer(
  state: FollowListPatientState | undefined,
  action: Action
) {
  return reducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectAllFollowPatientList = selectAll;
export const selectIdsFollowPatientsList = selectIds;
