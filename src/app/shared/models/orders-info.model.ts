import { Order } from "./order.model";

export interface OrdersInfo {
  count: number,
  order: Order[],
  undisplayedMatches: boolean,
  moreUncountedMatches: boolean,
}
