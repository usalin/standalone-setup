import { createAction, props } from '@ngrx/store';
import { Unit } from '../models/unit.models';

/* LOAD UNITS */
export const loadUnits = createAction('[Unit] Load Units');
export const loadUnitsSuccess = createAction(
  '[Unit] Load Units Success',
  props<{ units: Unit[] }>()
);


