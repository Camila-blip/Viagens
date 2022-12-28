import { configureStore}  from "@reduxjs/toolkit";
import reducer from "./modules/reserve/reducer";

export default configureStore({
    reducer:{
        reserve: reducer
    }
});
