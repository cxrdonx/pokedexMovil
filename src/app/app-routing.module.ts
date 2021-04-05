import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokeComponent} from './poke/poke.component';
import {SeekerComponent} from './seeker/seeker.component';

const routes: Routes = [
  {path: '', component: PokeComponent},
  {path: '', component: SeekerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
