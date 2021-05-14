import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/core.state";
import {
  selectFollowOrdersListAll,
} from "../../../core/follow-list/follow-list-orders/follow-list-orders.selectors";
import {
  selectFollowListPatientAll,
} from "../../../core/follow-list/follow-list-patients/follow-list-patients.selectors";
import { removeFromFollowPatientList } from "../../../core/follow-list/follow-list-patients/follow-list-patients.actions";
import { removeFromFollowOrderList } from "../../../core/follow-list/follow-list-orders/follow-list-orders.actions";
import { Observable } from "rxjs";
import { Patient } from "../../../shared/models/patient.model";
import { Order } from "../../../shared/models/order.model";
import { FormControl } from "@angular/forms";

@Component({
  selector: "st-follow-list",
  templateUrl: "./follow-list.component.html",
  styleUrls: [ "./follow-list.component.scss" ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowListComponent implements OnInit {
  followPatientsList$: Observable<Patient[]>;
  followOrdersList$: Observable<Order[]>;
  searchControlPatients: FormControl = new FormControl('');
  searchControlOrders: FormControl = new FormControl('');

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.followOrdersList$ = this.store.select(selectFollowOrdersListAll);
    this.followPatientsList$ = this.store.select(selectFollowListPatientAll);
  }

  removeFromFollowPatientList(id: number) {
    this.store.dispatch(removeFromFollowPatientList({ id }));
  }

  removeFromFollowOrderList(id: number) {
    this.store.dispatch(removeFromFollowOrderList({ id }));
  }

  clearPatientsInput() {
    this.searchControlPatients.setValue('');
  }

  clearOrdersInput() {
    this.searchControlOrders.setValue('');
  }
}
