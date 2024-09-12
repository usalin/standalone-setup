import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { UnitEffects } from './data-access/store/unit.effects';
import { HomeComponent } from './features/home/home.component';


export const routes: Routes = [
  {path: '',  providers: [provideEffects(UnitEffects)],
   children: [
    { path: '', component: HomeComponent}
   ]
  }
];
