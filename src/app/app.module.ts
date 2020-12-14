import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './store/reducer';
import { RootEffects } from './store/effects';

import { AppComponent } from './app.component';
import { ValidStateComponent } from './components/valid-state/valid-state.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([RootEffects]),
    StoreModule.forRoot({
      rootState: rootReducer,
    }),
    StoreDevtoolsModule.instrument({}),
    NgbModule,
  ],
  declarations: [AppComponent, ValidStateComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
