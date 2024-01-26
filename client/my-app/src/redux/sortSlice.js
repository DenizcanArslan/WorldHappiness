import {createSlice}  from "@reduxjs/toolkit";

const sortSlice=createSlice({

name:"sortType",

initialState:{
    sortBy:"overallrank",
    orderBy:"ASC",

},


    reducers:{

        updateState:(state,action)=>{
            const {sortBy,orderBy}=action.payload;

            state.sortBy=sortBy;
            state.orderBy=orderBy

        },



    },


});


export const {updateState}=sortSlice.actions;

export default sortSlice.reducer;