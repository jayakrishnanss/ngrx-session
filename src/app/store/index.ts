import { ApiError, ApiSuccess, ApiGetMockData } from './actions';
import { RootEffects } from './effects';
import { rootReducer } from './reducer';
import {
  getStateError,
  getStateSelectedData,
  getValidState,
} from './selectors';

export const fromRoot = {
  ApiError,
  ApiSuccess,
  ApiGetMockData,
  rootReducer,
  RootEffects,
  getStateError,
  getStateSelectedData,
  getValidState,
};
