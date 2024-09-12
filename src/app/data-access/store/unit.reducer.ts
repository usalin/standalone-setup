// src/app/state/Unit.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Unit } from '../models/unit.models';
import * as UnitActions from './unit.actions';

export interface UnitState extends EntityState<Unit> {}

export const adapter = createEntityAdapter<Unit>();
export const initialState: UnitState = adapter.getInitialState({});

export const UnitReducer = createReducer(
  initialState,
  on(UnitActions.loadUnitsSuccess, (state, { units: units }) =>
    adapter.setAll(units, state)
  ),
);

export const {
  selectAll: selectAllUnits,
  selectEntities: selectUnitEntities,
} = adapter.getSelectors();
