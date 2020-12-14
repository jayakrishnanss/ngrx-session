import { createSelector } from '@ngrx/store';
import { RootState } from './reducer';

const getError = (state: RootState): string => state.error;
const getSelectedData = (state: RootState): any => state.selectedMockData;
const getValid = (state: RootState): any => state.valid;

const getStateError = createSelector((state: any) => state.rootState, getError);

const getStateSelectedData = createSelector(
  (state: { rootState: RootState }) => state.rootState,
  getSelectedData
);

const getValidState = createSelector((state: any) => state.rootState, getValid);

export { getStateError, getStateSelectedData, getValidState };
