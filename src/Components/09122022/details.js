import { createSlice } from '@reduxjs/toolkit'

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    value: 'initial',
    password:'initial'
  
  },
  reducers: {
    setUserName:(state,action)=>{ 
        state.value=action.payload

    },
    setPassword:(state,action)=>{
        state.password=action.payload
    }
    
  },
})


export const { setUserName , setPassword} = detailsSlice.actions

export default detailsSlice.reducer