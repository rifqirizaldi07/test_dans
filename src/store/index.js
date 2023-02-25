import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./data.slice";

export * from "./data.slice";

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})