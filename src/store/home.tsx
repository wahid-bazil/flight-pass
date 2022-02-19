import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Segment, DefaultConfiguration } from '../type';



export interface InitialHomeState {
    segmentList: Segment[],
    currentSegment_id: number,
    currentSegment: Segment,
    isSelectOpen: boolean,
    DefaultConfiguration: DefaultConfiguration,
    //loading state
    LoadDefaultConfiguration: boolean,

}
const initialAuthState: InitialHomeState = {
    segmentList: [ {
        "segmentId": 6,
        "configId": 1,
        "departureAirportRef": {
            "name": "Mohammed V International Airport",
            "code": "CMN",
            "latitude": "33.3675003",
            "longitude": "-7.5899701",
            "city": "Casablanca",
            "country": "Morocco",
            "isoCode": "MA"
        },
        "arrivalAirportRef": {
            "name": "Paris-Orly Airport",
            "code": "ORY",
            "latitude": "48.7252998",
            "longitude": "2.3594401",
            "city": "Paris",
            "country": "France",
            "isoCode": "FR"
        }
    }],
    currentSegment_id: 0,
    isSelectOpen: false,
    DefaultConfiguration: {
        nbrFlight: 10,
        delay: 10,
        dayToDeparture: 6,
        price: 6000
    },
    LoadDefaultConfiguration: true,
    currentSegment: {
        "segmentId": 6,
        "configId": 1,
        "departureAirportRef": {
            "name": "Mohammed V International Airport",
            "code": "CMN",
            "latitude": "33.3675003",
            "longitude": "-7.5899701",
            "city": "Casablanca",
            "country": "Morocco",
            "isoCode": "MA"
        },
        "arrivalAirportRef": {
            "name": "Paris-Orly Airport",
            "code": "ORY",
            "latitude": "48.7252998",
            "longitude": "2.3594401",
            "city": "Paris",
            "country": "France",
            "isoCode": "FR"
        }
    },
};

const HomeSlice = createSlice({
    name: 'home',
    initialState: initialAuthState,
    reducers: {
        setSegmants(state, action: PayloadAction<Segment[]>) {
            console.log("in red home " , action.payload)
            state.segmentList = action.payload
        },
        setcurrentSegment(state, action: PayloadAction<number>) {
            state.currentSegment_id = action.payload
            state.currentSegment = state.segmentList.find(element => element.segmentId == action.payload) ||
            {
                "segmentId": 6,
                "configId": 1,
                "departureAirportRef": {
                    "name": "Mohammed V International Airport",
                    "code": "CMN",
                    "latitude": "33.3675003",
                    "longitude": "-7.5899701",
                    "city": "Casablanca",
                    "country": "Morocco",
                    "isoCode": "MA"
                },
                "arrivalAirportRef": {
                    "name": "Paris-Orly Airport",
                    "code": "ORY",
                    "latitude": "48.7252998",
                    "longitude": "2.3594401",
                    "city": "Paris",
                    "country": "France",
                    "isoCode": "FR"
                }
            }
        },
        openSelect(state) {
            state.isSelectOpen = !state.isSelectOpen
        },
        setDefaultConfiguration(state, action: PayloadAction<DefaultConfiguration>) {
            state.DefaultConfiguration = action.payload
        },

        //loadingstate
        setLoadDefaultConfiguration(state, action) {
            state.LoadDefaultConfiguration = action.payload
        }
    },
});

export const homeActions = HomeSlice.actions;

export default HomeSlice.reducer;