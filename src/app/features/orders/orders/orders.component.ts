import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { AppState, ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Order } from "../../../shared/models/order.model";
import { OrdersInfo } from "../../../shared/models/orders-info.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { fetchOrders } from "../../../core/orders/orders.actions";
import { getOrder, getOrdersInfo } from "../../../core/orders/orders.selectors";
import {
  addToFollowOrderList,
  removeFromFollowOrderList,
} from "../../../core/follow-list/follow-list-orders/follow-list-orders.actions";
import {
  selectFollowOrdersListIds,
} from "../../../core/follow-list/follow-list-orders/follow-list-orders.selectors";
import { FormControl } from "@angular/forms";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  orders$: Observable<Order[]> = null
  ordersInfo$: Observable<OrdersInfo> = null
  followOrdersList$: Observable<any[]> = null;
  searchControl: FormControl = new FormControl('');

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.orders$ = this.store.select(getOrder);
    this.ordersInfo$ = this.store.select(getOrdersInfo);
    this.followOrdersList$ = this.store.select(selectFollowOrdersListIds);
  }

  getOrders(): void {
    this.store.dispatch(fetchOrders());
  }

  addToFollowOrderList(order: Order) {
    this.store.dispatch(addToFollowOrderList({ order }));
  }

  removeFromFollowOrderList(id: number) {
    this.store.dispatch(removeFromFollowOrderList({ id }));
  }

  clearInput() {
    this.searchControl.setValue('');
  }
}
