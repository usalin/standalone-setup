import { Injectable } from '@angular/core';
import { Unit } from '../models/unit.models';
import { Observable, of } from 'rxjs';
import { MOCK_UNITS_DATA } from '../data/units';

@Injectable({
  providedIn: 'root',
})

export class UnitService {
  getUnits(): Observable<Unit[]> {
    console.log(MOCK_UNITS_DATA.units);
    return of(MOCK_UNITS_DATA.units);
  }
}
