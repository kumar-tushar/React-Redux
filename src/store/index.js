import {createSlice, configureStore} from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name: 'counter',
    initialState: {counter: 0, showCounter: true},
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const store=configureStore({reducer: counterSlice.reducer})
export default store
export const counterActions=counterSlice.actions