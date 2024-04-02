import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        make: 'Make',
        model: "Model",
        year: 'Year',
        mileage: 'Mileage',
        price: 'Price',
        body_style: 'Body Style'
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMileage: (state, action) => { state.mileage = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseBodyStyle: (state, action) => { state.body_style = action.payload },

    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseMileage, choosePrice, chooseBodyStyle } = rootSlice.actions