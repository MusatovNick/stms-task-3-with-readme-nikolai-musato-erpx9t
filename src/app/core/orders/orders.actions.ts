import { createAction, props } from "@ngrx/store";
import { OrdersInfo } from "../../shared/models/orders-info.model";

export const fetchOrders = createAction(
  '[Orders Action] Fetch Orders',
);

export const fetchOrdersSuccess = createAction(
  '[Orders Action] Fetch Orders Success',
  props<{ ordersInfo: OrdersInfo }>(),
);
