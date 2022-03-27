import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { SeriesListComponent } from './views/series-list/series-list.component';
import { SerieNewComponent } from './views/serie-new/serie-new.component';
import { SerieDetailsComponent } from './views/serie-details/serie-details.component';
import { SerieEditComponent } from './views/serie-edit/serie-edit.component';
import { ErrorComponent } from './views/error/error.component';
import { CommFormComponent } from './views/comm-form/comm-form.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'series', canActivate: [AuthGuard], component: SeriesListComponent },
  {
    path: 'series/new',
    canActivate: [AuthGuard],
    component: SerieNewComponent,
  },
  {
    path: 'series/:id',
    canActivate: [AuthGuard],
    component: SerieDetailsComponent,
  },
  {
    path: 'series/comment/:id',
    canActivate: [AuthGuard],
    component: CommFormComponent,
  },
  {
    path: 'series/edit/:id',
    canActivate: [AuthGuard],
    component: SerieEditComponent,
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
