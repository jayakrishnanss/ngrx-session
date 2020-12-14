import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getValidState } from '../../store/selectors';
@Component({
  selector: 'app-valid-state',
  templateUrl: './valid-state.component.html',
  styleUrls: ['./valid-state.component.scss'],
})
export class ValidStateComponent implements OnInit {
  valid$: Observable<string>;
  isValid;
  constructor(private store: Store) {
    this.valid$ = this.store.select(getValidState);
  }

  ngOnInit(): void {
    this.initSubscription();
  }

  initSubscription() {
    this.valid$.subscribe((data) => {
      this.isValid = data;
    });
  }
}
