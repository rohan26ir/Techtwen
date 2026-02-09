import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counters: { [key: string]: number };
  targets: { [key: string]: number };
}

const initialState: CounterState = {
  counters: {},
  targets: {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounter: (state, action: PayloadAction<{ id: string; target: number }>) => {
      state.counters[action.payload.id] = 0;
      state.targets[action.payload.id] = action.payload.target;
    },
    incrementCounter: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.counters[id] < state.targets[id]) {
        state.counters[id] += 1;
      }
    },
  },
});

export const { initCounter, incrementCounter } = counterSlice.actions;
export default counterSlice.reducer;