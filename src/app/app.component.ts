import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { selectUnitList } from './data-access/store/unit.selectors';
import { Store } from '@ngrx/store';
import * as UnitActions from './data-access/store/unit.actions';
import { Unit } from './data-access/models/unit.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private store = inject(Store);

  units$: Observable<Unit[]> = this.store.select(selectUnitList);

  ngOnInit() {
    this.store.dispatch(UnitActions.loadUnits());
  }
}
