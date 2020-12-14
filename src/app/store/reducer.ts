import { createReducer, on } from '@ngrx/store';

// !! ApiGetMockData and ApiGetMockDataWithError not used because it is handled in ./effects
import {
  ApiGetMockData,
  ApiError,
  ApiSuccess,
  ApiGetMockDataWithError,
} from './actions';

export interface RootState {
  error: any;
  selectedMockData: { id: string; data: string };
  valid: false;
}

const initialState: RootState = {
  error: null,
  selectedMockData: null,
  valid: false,
};

export const rootReducer = createReducer(
  initialState,
  on(ApiError, (state, action) => ({
    error: action.error,
    selectedMockData: null,
    valid: false,
  })),
  on(ApiSuccess, (state, action) => ({
    selectedMockData: action.data,
    error: null,
    valid: true,
  }))
);
