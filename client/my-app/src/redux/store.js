import {configureStore} from "@reduxjs/toolkit";
import sortSlice from "./sortSlice";


const store=configureStore({

    reducer:{
        sortType:sortSlice,
    },


});

export default store;