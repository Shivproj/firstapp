import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value:'username'
  },
  reducers: {
    setUsername:(state,action)=>{
        state.value=action.payload;
    }
  
   
  }
})

// Action creators are generated for each case reducer function
export const { setUsername } = counterSlice.actions

export default counterSlice.reducer