import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MockApiService } from '../services/mockapi.service';
import { ApiGetMockData, ApiError, ApiSuccess } from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RootEffects {
  getMockDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiGetMockData),
      mergeMap((action) => {
        return this.mockApi.getDataFromId(action.id).pipe(
          map((res) => ApiSuccess({ data: res })),
          catchError((error) => of(ApiError({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions, private mockApi: MockApiService) {}
}
