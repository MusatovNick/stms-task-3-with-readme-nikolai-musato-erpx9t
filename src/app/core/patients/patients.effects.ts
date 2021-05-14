import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../core.state";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchPatients, fetPatientsSuccess } from "./patients.actions";
import { map, switchMap } from "rxjs/operators";
import { PatientsService } from "./patients.service";
import { PatientsInfo } from "../../shared/models/patients-info.model";

@Injectable()
export class PatientsEffects {
  getPatients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPatients),
      switchMap(() => this.patientsService.getPatients()),
      map((patientsInfo: PatientsInfo) => fetPatientsSuccess({ patientsInfo })),
    ),
  )


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private patientsService: PatientsService,
  ){}
}
