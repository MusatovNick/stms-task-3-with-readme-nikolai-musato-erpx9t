import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../core.state";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { fetchOrders, fetchOrdersSuccess } from "./orders.actions";
import { OrdersService } from "./orders.service";
import { OrdersInfo } from "../../shared/models/orders-info.model";

@Injectable()
export class OrdersEffects {
  getOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchOrders),
      switchMap(() => this.ordersService.getOrders()),
      map((ordersInfo: OrdersInfo) => fetchOrdersSuccess({ ordersInfo })),
    ),
  )

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private ordersService: OrdersService,
  ){}
}
