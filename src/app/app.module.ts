import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from './store';

import { AppComponent } from './app.component';
import { ValidStateComponent } from './components/valid-state/valid-state.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer,
    }),
    StoreDevtoolsModule.instrument({}),
    NgbModule,
  ],
  declarations: [AppComponent, ValidStateComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
