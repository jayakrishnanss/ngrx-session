import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRoot } from './store';
import { Observable } from 'rxjs';

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
    this.data$ = this.store.select(fromRoot.getStateSelectedData);
  }

  ngOnInit() {
    this.initSubscription();
  }

  getApiData() {
    this.store.dispatch(fromRoot.ApiGetMockData({ id: 'randomId' }));
  }

  initSubscription() {
    this.data$.subscribe((data) => {
      this.techData = data;
    });
  }
}
