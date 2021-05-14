import { createSelector } from "@ngrx/store";
import { selectFollowListPatientState } from "../../core.state";
import {
  FollowListPatientState,
  selectAllFollowPatientList,
  selectIdsFollowPatientsList,
} from "./follow-list-patients.reducer";

export const selectFollowPatientList = createSelector(
  selectFollowListPatientState,
  (state: FollowListPatientState) => state
);

export const selectFollowListPatientAll = createSelector(
  selectFollowPatientList,
  selectAllFollowPatientList,
);

export const selectFollowPatientsListIds = createSelector(
  selectFollowPatientList,
  selectIdsFollowPatientsList,
);
