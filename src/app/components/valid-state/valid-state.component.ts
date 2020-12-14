import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRoot } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-valid-state',
  templateUrl: './valid-state.component.html',
  styleUrls: ['./valid-state.component.scss'],
})
export class ValidStateComponent implements OnInit {
  valid$: Observable<string>;
  isValid;
  constructor(private store: Store) {
    this.valid$ = this.store.select(fromRoot.getValidState);
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
