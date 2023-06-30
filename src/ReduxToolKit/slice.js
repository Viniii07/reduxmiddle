import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialData={
    name:"",
    loc:""
}

const nameLocRed=createSlice({
    initialState:initialData,
    name:"NAME_LOC",
    reducers:{
        setName:(state,action)=>{
            state.name=action.payload;
        },
        setLoc:(state,action)=>{
            state.loc=action.payload
        }
    }
})

export const {setName,setLoc}=nameLocRed.actions;

const selectSelf=(state)=>state;

export const getName=createSelector(selectSelf,({nameLoc})=>nameLoc.name)
export const getLoc=createSelector(selectSelf,({nameLoc})=>nameLoc.loc)

export default nameLocRed.reducer;