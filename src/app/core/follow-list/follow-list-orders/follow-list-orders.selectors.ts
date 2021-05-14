import { createSelector } from "@ngrx/store";
import { selectFollowListOrderState } from "../../core.state";
import {
  FollowListOrderState,
  selectAllFollowOrdersList,
  selectIdsFollowOrdersList,
} from "./follow-list-orders.reducer";

export const selectFollowOrderList = createSelector(
  selectFollowListOrderState,
  (state: FollowListOrderState) => state
);

export const selectFollowOrdersListAll = createSelector(
  selectFollowOrderList,
  selectAllFollowOrdersList,
);

export const selectFollowOrdersListIds = createSelector(
  selectFollowOrderList,
  selectIdsFollowOrdersList,
);
