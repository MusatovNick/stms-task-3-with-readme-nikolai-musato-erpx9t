import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { OrdersInfo } from "../../shared/models/orders-info.model";


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private http: HttpClient
  ) {}

  getOrders(): Observable<OrdersInfo> {
    return this.http.get<OrdersInfo>(`https://api.mocki.io/v2/79fb05cb`);
  }
}
