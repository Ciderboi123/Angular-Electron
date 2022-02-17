import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
