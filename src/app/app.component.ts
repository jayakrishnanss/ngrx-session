import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiGetMockData } from './store/actions';
import { getStateSelectedData } from './store/selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$: Observable<string>;
  JSON = JSON;
  techData;
  constructor(private store: Store) {
    this.data$ = this.store.select(getStateSelectedData);
  }

  ngOnInit() {
    this.initSubscription();
  }

  getApiData() {
    this.store.dispatch(ApiGetMockData({ id: 'randomId' }));
  }

  initSubscription() {
    this.data$.subscribe((data) => {
      this.techData = data;
    });
  }
}
