import { createAction, props } from "@ngrx/store";
import { Order } from "../../../shared/models/order.model";

export const addToFollowOrderList = createAction(
  '[Follow List/Action] Add To Follow Order List',
  props<{ order: Order }>(),
);

export const removeFromFollowOrderList = createAction(
  '[Follow List/Action] Remove from Follow Order List',
  props<{ id: number }>(),
);
