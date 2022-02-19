import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseConfig, config, dayToDeparture, delay, Segment, User } from '../type';


export interface InitialConfigtate {
    baseConfigList: baseConfig[],
    segmentList: Segment[],
    delayList: delay[],
    dayToDepartureList: dayToDeparture[],
    currentConfig: config | null
    totalPrice: number,
    unitPrice: number,
}
const initialConfigtate: InitialConfigtate = {
    baseConfigList: [],
    segmentList: [],
    delayList: [],
    currentConfig: null,
    dayToDepartureList: [],
    totalPrice: 0,
    unitPrice: 0
};

const configSlice = createSlice({
    name: 'configuration',
    initialState: initialConfigtate,
    reducers: {
        setBaseConfigList(state, action: PayloadAction<baseConfig[]>) {
            console.log("in red base" ,action.payload)
            state.baseConfigList = action.payload
        },
        setDelayList(state, action: PayloadAction<delay[]>) {
            state.delayList = action.payload
        },
        setDayToDepartureList(state, action: PayloadAction<dayToDeparture[]>) {
            state.dayToDepartureList = action.payload
            console.log('in red config ' ,state.dayToDepartureList  , action.payload)
        },
        setPrice(state, action: PayloadAction<number>) {
            state.totalPrice = action.payload
            if (state.currentConfig) {
                state.unitPrice = state.totalPrice / state.currentConfig.nbrFlights

            }
        },
    },
});

export const configActions = configSlice.actions;

export default configSlice.reducer;