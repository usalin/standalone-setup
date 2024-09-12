import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitState, selectAllUnits } from './unit.reducer';

export const selectUnitState = createFeatureSelector<UnitState>('Units');
export const selectUnitList = createSelector(selectUnitState, selectAllUnits);



