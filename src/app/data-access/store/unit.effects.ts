import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnitService } from '../services/unit.service';
import * as UnitActions from './unit.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UnitEffects {
  constructor(private actions$: Actions, private unitService: UnitService) {}

  loadUnits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UnitActions.loadUnits),
      mergeMap(() =>
        this.unitService.getUnits().pipe(
          map((units) => UnitActions.loadUnitsSuccess({units: units }))
        )
      )
    )
  );
}
