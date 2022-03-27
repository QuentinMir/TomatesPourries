import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { ErrorComponent } from './views/error/error.component';
import { AuthComponent } from './views/auth/auth.component';
import { SeriesListComponent } from './views/series-list/series-list.component';
import { SerieEditComponent } from './views/serie-edit/serie-edit.component';
import { SerieNewComponent } from './views/serie-new/serie-new.component';
import { SerieDetailsComponent } from './views/serie-details/serie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { SerieService } from './services/serie/serie.service';
import { CommFormComponent } from './views/comm-form/comm-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SerieFormComponent,
    ErrorComponent,
    AuthComponent,
    SeriesListComponent,
    SerieEditComponent,
    SerieNewComponent,
    SerieDetailsComponent,
    CommFormComponent,
    ErrorsFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, SerieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
