import { AppState } from "../core.state";
import { OrdersInfo } from "../../shared/models/orders-info.model";

export interface OrdersState {
  ordersInfo: OrdersInfo;
}

export interface State extends AppState {
  ordersInfo: OrdersState;
}
