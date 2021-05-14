import { Action, createReducer, on } from "@ngrx/store";
import { fetchOrdersSuccess } from "./orders.actions";
import { OrdersState } from "./orders.model";

export const initialState: OrdersState = {
  ordersInfo: null,
};

const reducer = createReducer(
  initialState,

  on(
    fetchOrdersSuccess,
    (state, { ordersInfo }) => ({
      ...state,
      ordersInfo,
    }),
  ),
)

export function ordersReducer(
  state: OrdersState | undefined,
  action: Action
) {
  return reducer(state, action);
}
