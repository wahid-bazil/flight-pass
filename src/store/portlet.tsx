import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Portlet } from '../type';



export interface InitialPortletState {
    portletList:
    {
        segment_id: number, portlets: Portlet[]
    }[]
}
const InitialPortletState: InitialPortletState = {
    portletList: []
};

const PortletSlice = createSlice({
    name: 'portlet',
    initialState: InitialPortletState,
    reducers: {
        
        setPortlet(state, action: PayloadAction<{ segment_id: number, portlets: Portlet[] }[]>) {
            console.log("rerer", action.payload)
            state.portletList = action.payload
        },

    },
});

export const portletActions = PortletSlice.actions;

export default PortletSlice.reducer;