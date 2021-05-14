import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
import { patientsReducer } from "./patients/patients.reducer";
import { PatientsState } from "./patients/patients.model";
import { ordersReducer } from "./orders/orders.reducer";
import { OrdersState } from "./orders/orders.model";
import {
  followListPatientReducer,
  FollowListPatientState,
} from "./follow-list/follow-list-patients/follow-list-patients.reducer";
import {
  followListOrderReducer,
  FollowListOrderState,
} from "./follow-list/follow-list-orders/follow-list-orders.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer,
  patients: patientsReducer,
  orders: ordersReducer,
  followListPatient: followListPatientReducer,
  followListOrder: followListOrderReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export const selectPatientsState = createFeatureSelector<
  AppState,
  PatientsState
  >('patients');

export const selectOrdersState = createFeatureSelector<
  AppState,
  OrdersState
  >('orders');

export const selectFollowListPatientState = createFeatureSelector<
  AppState,
  FollowListPatientState
  >('followListPatient');

export const selectFollowListOrderState = createFeatureSelector<
  AppState,
  FollowListOrderState
  >('followListOrder');

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  patients: PatientsState;
  orders: OrdersState;
  followListPatient: FollowListPatientState;
  followListOrder: FollowListOrderState;
}
