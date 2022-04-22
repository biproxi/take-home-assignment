import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {NeedsUpdateState} from "../../../../index";

const initialState: NeedsUpdateState = {
  id: '',
  title: '',
  status: '',
}

export const needsUpdateSlice = createSlice({
  name: 'needsUpdate',
  initialState,
  reducers: {
      setNeedsUpdate: (state, action :PayloadAction<NeedsUpdateState>) => {
        state.id = action.payload.id
        state.title = action.payload.title
        state.status = action.payload.status
    }
  },
})

export const { setNeedsUpdate } = needsUpdateSlice.actions
export const selectNeedsUpdate = (state: RootState) => state.needsUpdate

export default needsUpdateSlice.reducer