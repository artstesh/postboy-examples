import {Routes} from '@angular/router';
import {ClickerPageComponent} from './sections/clicker-page/clicker-page.component';
import {WorldTimePageComponent} from './sections/world-time/world-time-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'clicker', pathMatch: 'full'},
  {path: 'clicker', component: ClickerPageComponent},
  {path: 'time', component: WorldTimePageComponent},
];
