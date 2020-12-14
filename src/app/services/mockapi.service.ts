import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  getDataFromId(id: string): Observable<any> {
    return of({ id: 0, data: '' }).pipe(
      map((item) => [
        {
          id: 1,
          name: 'Angular',
          version: '11.0.4',
          description:
            'Angular is a platform for building mobile and desktop web applications',
        },
        {
          id: 2,
          name: 'Node.js',
          version: '14.15.1',
          description:
            'Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser',
        },
        {
          id: 3,
          name: 'React',
          version: '17.0.1',
          description:
            'React is an open-source, front end, JavaScript library for building user interfaces or UI components',
        },
      ]),
      delay(1000)
    );
  }

  getApiError(): Observable<any> {
    // getting an error after 1s
    return of(0).pipe(
      delay(1000),
      tap(() => {
        throw 'A random error';
      })
    );
  }
}
