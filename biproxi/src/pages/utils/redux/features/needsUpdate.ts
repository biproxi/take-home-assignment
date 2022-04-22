import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface NeedsUpdateState {
  value: boolean
}

const initialState: NeedsUpdateState = {
  value: false,
}

export const needsUpdateSlice = createSlice({
  name: 'needsUpdate',
  initialState,
  reducers: {
    setNeedsUpdate: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  },
})

export const { setNeedsUpdate } = needsUpdateSlice.actions
export const selectNeedsUpdate = (state: RootState) => state.needsUpdate.value

export default needsUpdateSlice.reducer