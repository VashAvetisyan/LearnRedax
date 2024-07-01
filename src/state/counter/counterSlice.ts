import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "conuter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers:(bulider) => {
        bulider.addCase(incrementAsyns.pending, () => {
            console.log('incrementAsyns')
        })
        .addCase(incrementAsyns.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })
    }
})

export const incrementAsyns = createAsyncThunk(
    "conunter/incrementAsyns",
    async (amonut: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amonut
    }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;